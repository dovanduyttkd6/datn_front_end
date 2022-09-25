import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators} from '@angular/forms';
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-import-excel-management',
  templateUrl: './import-excel-management.component.html',
  styleUrls: ['./import-excel-management.component.less']
})
export class ImportExcelManagementComponent implements OnInit {
  isBreadcrumb: any = false;
  breadcrumbs: any = [];
  isEdit: any;
  addForm: any;
  listExcelFile: any = [];
  isSubmit: any = false;

  constructor(
    private translateService: TranslateService,
    private formBuilder: FormBuilder,
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
        name: this.translateService.instant('breadcrumb.excel-management'),
        route: '/catalog-management/excel',
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

  fetchFile(event: any, number: number) {
    console.log(event);
    if (number == 1) {
      this.listExcelFile = event;
    }
  }

  cancelConfirm() {
    console.log("Cancel");
  }

  submitForm() {
    console.log("Submit");
  }

}
