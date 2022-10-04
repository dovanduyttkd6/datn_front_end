import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Injector,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {InputTextComponent} from "../../components/inputs/input-text/input-text.component";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl} from "@angular/forms";
import {NgxSpinnerService} from "ngx-spinner";
import {APP_PARAMS_TYPE, COLUMNS, defaultRequestList, SCROLL_TABLE} from "../../../utils";
import {AppParamsService} from "../../../services/app-params/app-params.service";
import {ToastService} from "@shared";
import {FileManagerService} from "../../../services/file-manager/file-manager.service";
import { interval, Subscription } from 'rxjs';
import { OfferManagementService } from 'src/app/services/offer-management/offer-management.service';

@Component({
  selector: 'app-offer-management',
  templateUrl: './offer-management.component.html',
  styleUrls: ['./offer-management.component.less']
})
export class OfferManagementComponent implements OnInit {
  searchForm: any;
  breadcrumbs: any = [];
  isBreadcrumb = false;
  total = 0;
  @ViewChild('codeRef', {static: false}) codeRef: InputTextComponent;
  lstData: any[] = [];
  listVM: any[] = [];
  private refreshPage: Subscription;
  request: any = {
    ...defaultRequestList,
  };
  SCROLL_TABLE = SCROLL_TABLE;
  isVisibleModalDelete: any;
  selectedCode: any;
  selectedName: any;
  selectedId: any;
  timeRefresh: string = "";
  check : boolean = true;
  isSuperAdmin : boolean = false;
  @Input() isChecked = false;
  @Input() isCheckedAll = false;

  constructor(public translateService: TranslateService,
              injector: Injector,
              private router: Router,
              private formBuilder: FormBuilder,
              private changeDetectorRef: ChangeDetectorRef,
              private toastService: ToastService,
              private fileManagerService: FileManagerService,
              private activatedRouter: ActivatedRoute,
              private offerService: OfferManagementService
              ) {
  }

  ngOnInit() {
    this.isSuperAdmin = false;
    if(!this.isSuperAdmin) {
      this.setBreadcrumb();
      this.buildForm();
      console.log(this.router.getCurrentNavigation() ? this.router.getCurrentNavigation().extras.state.request : "1");
      this.searchForm.value = {
        email: "ngoc@gmail.com",
        maDx: null,
        tenKhoanTien: null
      }
      this.nzOnSearch(null);
    } else {
      this.setBreadcrumb();
      this.buildForm();
      console.log(this.router.getCurrentNavigation() ? this.router.getCurrentNavigation().extras.state.request : "1");
      this.nzOnSearch(null);
    }
    // this.setBreadcrumb();
    // this.buildForm();
    // console.log(this.router.getCurrentNavigation() ? this.router.getCurrentNavigation().extras.state.request : "1");
    // this.nzOnSearch(null);
  }

  ngAfterViewInit() {
    this.codeRef.focus();
  }

  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();
  }

  setBreadcrumb() {
    this.breadcrumbs = [
      {
        name: this.translateService.instant('breadcrumb.catalog-management'),
        route: '',
      },
      {
        name: this.translateService.instant('breadcrumb.offer-management'),
        route: '/catalog-management/offer',
      },
    ];
    this.isBreadcrumb = true;
  }

  nzOnSearch(event: any) {
    this.request.page = 0;
    this.request.size = 10;
    this.fetchRequest();
  }

  // refreshListVM() {
  //   this.searchForm2 = this.formBuilder.group({
  //     code: new FormControl(null),
  //     title: new FormControl(null),
  //     nameNvYc: new FormControl(null),
  //   });
  //   this.request.sort = 'code,name';
  //   this.requestService.search(this.searchForm2.value, this.request).subscribe(res => {
  //     this.lstData = res.data.content;
  //     this.total = res.data.totalElements;
  //     if(this.check == false){
  //       this.lstData.sort((a,b)=>(a.isActive > b.isActive) ? 1 : -1);
  //       this.check=false;
  //     }
  //   })
  // }

  fetchRequest() {
    console.log(this.searchForm.value);
    this.offerService.search(this.searchForm.value, this.request).subscribe(res => {
      console.log(res);
      this.lstData = res.data.content;
      this.total = res.data.totalElements;
    })
  }

  buildForm() {
    this.searchForm = this.formBuilder.group({
      tenKhoanTien: new FormControl(null),
      maDx: new FormControl(null),
      email: new FormControl(null)
    });
  }

  // onCreate() {
  //   this.router.navigate(['/catalog-management/request/add'])
  // }


  changeCurrentPage(currentPage: number) {
    this.request.page = currentPage;
    this.fetchRequest();
  }

  changeItemPerPage(itemPerPage: number) {
    this.request.page = 0;
    this.request.size = itemPerPage;
    this.fetchRequest();
  }

  // onDownloadFile(fileId: any, fileName: any) {
  //   this.fileManagerService.downloadFileById(fileId, fileName);
  // }

  openModalDelete(data: any) {
    this.isVisibleModalDelete = true;
    this.selectedCode = data.code;
    this.selectedName = data.title;
    this.selectedId = data.id;
  }

  // openModalRunAll() {
  //   if(this.listVM.length > 0) {
  //     this.isVisibleModalDelete = true;
  //     this.isRunAll = true;
  //   } else {
  //     this.toastService.openErrorToast(this.translateService.instant('catalog-management.vm.play.all.error'), null);
  //   }
  // }

  // callBackModalDelete(event: any) {
  //   this.offerService.delete(this.selectedId).subscribe(res => {
  //     console.log(res);
  //     if (res.data != "1") {
  //       this.toastService.openErrorToast(this.translateService.instant('catalog-management.request.delete.error', {
  //         code: this.selectedCode,
  //         srCode: res.data
  //       }), null);
  //       this.isVisibleModalDelete = false;
  //     } else {
  //       this.toastService.openSuccessToast(this.translateService.instant('catalog-management.request.delete.success'), null);
  //       this.isVisibleModalDelete = false;
  //       if (this.lstData.length == 1) {
  //         this.request.page = this.request.page > 0 ? this.request.page - 1 : 0;
  //       }
  //       this.fetchRequest();
  //     }
  //   })
  // }

  // onCancelModalDelete() {
  //   this.isVisibleModalDelete = false;
  // }

  // sortIsActive(){
  //   if(this.check){
  //     this.lstData.sort((a,b)=>(a.isActive > b.isActive) ? 1 : -1);
  //     this.check=false;
  //   }else{
  //     this.serverService.search(this.searchForm.value, this.request).subscribe(res => {
  //       this.lstData = res.data.content;
  //       this.total = res.data.totalElements;
  //     });
  //     this.check=true;
  //   }
  // }

  // onChangeChecked(isChecked, data: any){
  //   if(isChecked) {
  //     this.listVM.push(data.id);
  //   }
  //   else {
  //     this.listVM = this.listVM.filter((value, index) => value != data.id)
  //   }
  // }

  // checkedAll(isCheckedAll) {
  //   if(isCheckedAll) {
  //     this.lstData.forEach((data, index) => {
  //       this.listVM.push(data.id);
  //     })
  //   } else {
  //     this.listVM = [];
  //   }
  // }

}
