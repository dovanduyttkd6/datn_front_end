import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators} from '@angular/forms';
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute, Router} from "@angular/router";
import { FileManagerService } from 'src/app/services/file-manager/file-manager.service';
import { ToastService } from '@shared';

@Component({
  selector: 'app-import-excel-request-management',
  templateUrl: './import-excel-request-management.component.html',
  styleUrls: ['./import-excel-request-management.component.less']
})
export class ImportExcelRequestManagementComponent implements OnInit {

  isBreadcrumb: any = false;
  breadcrumbs: any = [];
  isEdit: any;
  addForm: any;
  listExcelFile: any = [];
  lstNewFile: any = [];
  isSubmit: any = false;
  accept: string = "accept";
  validMaxSize: number = 1;

  constructor(
    private fileManagerService: FileManagerService,
    private translateService: TranslateService,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.buildForm();
    console.log(this.router.getCurrentNavigation() ? this.router.getCurrentNavigation().extras.state.request : "1");
    this.setBreadcrumb();
  }

  setBreadcrumb() {
    this.breadcrumbs = [
      {
        name: this.translateService.instant('breadcrumb.catalog-management'),
        route: '',
      },
      {
        name: this.translateService.instant('breadcrumb.excelDR-management'),
        route: '/catalog-management/excelDR',
      },
      {
        name: this.translateService.instant(!this.isEdit ? 'breadcrumb.excel-management.add' : 'breadcrumb.excel-management.edit'),
        route: '',
      },

    ];
    this.isBreadcrumb = true;
  }

  buildForm() {
    this.addForm = this.formBuilder.group({
      id: null,
      fileExcel: new FormControl()
    });
  }

  uploadFileTemp(event: any){
    if(this.isValidFile(event.target.files[0])) {
      this.listExcelFile.push(event.target.files);
      this.lstNewFile.push(this.listExcelFile[0][0]);
      this.listExcelFile.shift();
    }
  }

  handleDeleteFile(item: any, index: any) {
    this.lstNewFile.splice(index, 1);
  }

  submitForm() {
    this.fileManagerService.uploadFileDR(this.lstNewFile, 1).subscribe(res => {
      console.log(res);
      if(res.message === "Cập nhật thành công!"){
        this.toastService.openSuccessToast('Import file yêu cầu thành công!');
      } else {
        this.toastService.openErrorToast('Import file yêu cầu thất bại!');
      }
      this.router.navigate(["/catalog-management/request"]);
    });
  }

  isValidFile(files): boolean {
    if (!files) {
      return true;
    }
    if (this.accept) {
      const fileName = files.name;
      const temp = fileName.split('.');
      const ext = temp[temp.length - 1].toLowerCase();
      const lenghtName = temp[0].length;
      const ruleFile = ',' + this.accept;
      if (lenghtName > 200) {
        this.toastService.openErrorToast('Tên file không được vượt quá 200 ký tự.');
        return false;
      }
      if (this.tctGetFileSize(files) > this.validMaxSize) {
        this.toastService.openErrorToast('Chỉ cho phép tải file có dung lượng tối đa 1Mb');
        return false;
      }
    }
    return true;
  }

  tctGetFileSize(files) {
    try {
      let fileSize;
      fileSize = files.size;
      fileSize /= (1024 * 1024); // chuyen ve MB
      return fileSize.toFixed(2);
    } catch (ex) {
      console.error(ex.message);
    }
  }

}
