import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FileManagerService} from 'src/app/services/file-manager/file-manager.service';
import {TranslateService} from '@ngx-translate/core';
import {CommonService} from '../../../services/common/common.service';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ToastService} from '@shared';

@Component({
  selector: 'app-upload-file-attachment',
  templateUrl: './upload-file-attachment.component.html',
  styleUrls: ['./upload-file-attachment.component.less'],
})
export class UploadFileAttachmentComponent implements OnInit {
  @Input() parentId: string;
  @Input() isEdit = false;
  @Input() labelContent;
  @Input() accept: string;
  @Input() validMaxSize: number;
  @Input() listFiles: any[] = [];
  @Input() isMultiple = false;
  @Input() required = false;
  @Input() errorTip: any;
  @Input() span = 16;
  @Input() hideLabel = false;
  @Input() isUploadFileModal = false;
  @Input() type: number = 1; // loài file upload
  @Input() control: AbstractControl;
  @Input() checkbox = false;
  @Input() default : AbstractControl;
  @Input() labelCheckbox: string;
  @Output() fetchFile: any = new EventEmitter();
  @Output() addFile: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteFile: EventEmitter<any> = new EventEmitter<any>();
  @Output() onCheckbox: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('uploader', {static: false}) uploader: ElementRef;

  error: string;
  dragAreaClass: string;
  fileForm: FormGroup

  constructor(
    private translateService: TranslateService,
    private fileManagerService: FileManagerService,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private commonService: CommonService) {
  }

  async ngOnInit() {
    this.fileForm = this.formBuilder.group({
      file: new FormControl(null),
    })
  }

  uploadFileTemp(e: any) {
    const lstNewFile = [];
    if (this.isMultiple) {
      for (let i = 0; i < e.target.files.length; i++) {
        if (this.isValidFile(e.target.files[i])) {
          let hasFile = false;
          this.listFiles.forEach(f => {
            if (f.name === e.target.files[i].name) {
              hasFile = true;
            }
          });
          if (!hasFile) {
            lstNewFile.push(e.target.files[i]);
          } else {
            this.toastService.openErrorToast(this.translateService.instant('common.import.error.file-exits'));
          }
        }
      }
    } else {
      if (this.isValidFile(e.target.files[0])) {
        lstNewFile.push(e.target.files[0]);
      }
    }
    console.log(lstNewFile);
    this.fileManagerService.uploadMultipleFile(lstNewFile,this.type).subscribe(res => {
      this.listFiles = res.data;
      this.listFiles = [...this.listFiles];
      this.fetchFile.emit(this.listFiles);
      this.control.patchValue(this.listFiles);
      this.uploader.nativeElement.value = null
    })

  }

  handleDeleteFile(item: any, index: any) {
    this.listFiles.splice(index, 1);
    this.deleteFile.emit(item);
  }
  onChangeCheckbox() {
    this.onCheckbox.emit(this.default);
  }

  async download(path, fileName) {
    const dataFile = await this.commonService.downloadFileById(path).toPromise();
    if (dataFile && dataFile.body.size > 0) {
      this.fileManagerService.downloadFile(dataFile, fileName);
    } else {
      this.toastService.openErrorToast(this.translateService.instant('common.import.error.file-not-found'));
    }
  }

  public isValidFile(files): boolean {
    if (!files) {
      return true;
    }
    if (this.accept) {
      const fileName = files.name;
      const temp = fileName.split('.');
      const ext = temp[temp.length - 1].toLowerCase();
      const lenghtName = temp[0].length
      const ruleFile = ',' + this.accept;
      if (lenghtName > 200) {
        this.toastService.openErrorToast('Tên file không được vượt quá 200 ký tự.');
        return false;
      }
      if (!ruleFile.toLowerCase().includes(ext)) {
        this.toastService.openErrorToast('Chỉ cho phép tải file có dung lượng tối đa 1Mb');
        return false;
      }
    }
    if (this.validMaxSize > 0) {
      if (this.tctGetFileSize(files) > this.validMaxSize) {
        this.toastService.openErrorToast('Chỉ cho phép tải file có dung lượng tối đa 1Mb');
        return false;
      }
    }
    return true;
  }

  /**
   * tctGetFileSize
   * param files
   */
  public tctGetFileSize(files) {
    try {
      let fileSize;
      fileSize = files.size;
      fileSize /= (1024 * 1024); // chuyen ve MB
      return fileSize.toFixed(2);
    } catch (ex) {
      console.error(ex.message);
    }
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
  }

  @HostListener("dragover", ["$event"]) onDragOver(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }

  @HostListener("dragenter", ["$event"]) onDragEnter(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  // changeDefault() {
  //   this.default = !this.default;
  // }

  @HostListener("dragend", ["$event"]) onDragEnd(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }

  @HostListener("dragleave", ["$event"]) onDragLeave(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }

  @HostListener("drop", ["$event"]) onDrop(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files) {
      const files: FileList = event.dataTransfer.files;
      this.saveFiles(files);
    }
  }

  saveFiles(files: FileList) {
    const lstNewFile = [];
    if (this.isMultiple) {
      for (let i = 0; i < files.length; i++) {
        if (this.isValidFile(files[i])) {
          let hasFile = false;
          this.listFiles.forEach(f => {
            if (f.name === files[i].name) {
              hasFile = true;
            }
          });
          if (!hasFile) {
            lstNewFile.push(files[i]);
          } else {
            this.toastService.openErrorToast(this.translateService.instant('common.import.error.file-exits'));
          }
        }
      }
    } else {
      if (this.isValidFile(files[0])) {
        lstNewFile.push(files[0]);
      }
    }
    this.fileManagerService.uploadMultipleFile(lstNewFile,this.type).subscribe(res => {
      this.listFiles = res.data;
      this.listFiles = [...this.listFiles];
      this.fetchFile.emit(this.listFiles);
      this.control.patchValue(this.listFiles);
      this.uploader.nativeElement.value = null
    })


    if (files.length > 1) this.error = "Only one file at time allow";
    // else {
    //   this.error = "";
    // }
  }
}
