import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailRequestService } from 'src/app/services/detail-request-management/detail-request.service';
import { TranslateService } from "@ngx-translate/core";
import { SCROLL_TABLE, defaultRequestList } from "../../../../utils";

@Component({
  selector: 'app-detail-request',
  templateUrl: './detail-request.component.html',
  styleUrls: ['./detail-request.component.less']
})
export class DetailRequestComponent implements OnInit {
  dataFake = [
    {
      id: 1,
      tenKhoanTien: "abcabc",
      soTien: 1111000,
      type: "thu",
      thoiGian: "2022-09-24T17:00:00.000+00:00",
      status: 1
    },
    {
      id: 2,
      tenKhoanTien: "abcabc",
      soTien: 1111000,
      type: "thu",
      thoiGian: "2022-09-24T17:00:00.000+00:00",
      status: 1
    },
    {
      id: 3,
      tenKhoanTien: "abcabc",
      soTien: 1111000,
      type: "thu",
      thoiGian: "2022-09-24T17:00:00.000+00:00",
      status: 1
    },
    {
      id: 4,
      tenKhoanTien: "abcabc",
      soTien: 1111000,
      type: "thu",
      thoiGian: "2022-09-24T17:00:00.000+00:00",
      status: 1
    },
    {
      id: 4,
      tenKhoanTien: "abcabc",
      soTien: 1111000,
      type: "thu",
      thoiGian: "2022-09-24T17:00:00.000+00:00",
      status: 1
    },
  ];
  total: any;
  maYc = "";
  lstData: any = [];
  breadcrumbs: any = [];
  isBreadcrumb = false;
  SCROLL_TABLE = SCROLL_TABLE;
  request: any = {
    ...defaultRequestList,
  };

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private detailRequestService: DetailRequestService,
    public translateService: TranslateService
  ) { }

  ngOnInit() {
    console.log(this.router.getCurrentNavigation() ? this.router.getCurrentNavigation().extras.state.request : '1');
    this.maYc = this.activatedRouter.snapshot.params['maYC'];
    this.total = this.dataFake.length;
    this.detailRequestService.getAll(this.maYc).subscribe(res => {
      this.lstData = res.data;
      this.total = res.data.length;
      console.log(res);
    })
    this.setBreadcrumb();
  }

  setBreadcrumb() {
    this.breadcrumbs = [
      {
        name: this.translateService.instant('breadcrumb.catalog-management'),
        route: '',
      },
      {
        name: this.translateService.instant('breadcrumb.detail-request-management'),
        route: '/catalog-management/request',
      },
    ];
    this.isBreadcrumb = true;
  }

  validatorRequest() {

  }

}
