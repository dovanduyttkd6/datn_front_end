import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CanActiveService} from "../../common/can-active.service";
import { ListServerComponent } from './server-management/list-server/list-server.component';
import { DetailServerComponent } from './server-management/detail-server/detail-server.component';
import { ListRequestComponent } from './request-management/list-request/list-request.component';
import { DetailRequestComponent } from './request-management/detail-request/detail-request.component';
import { ImportExcelManagementComponent } from './import-excel-management/import-excel-management.component';
import { OfferManagementComponent } from './offer-management/offer-management.component';
import { ListUserComponent } from './user-management/list-user/list-user.component';
import { DetailUserComponent } from './user-management/detail-user/detail-user.component';
import { ImportExcelRequestManagementComponent } from './import-excel-request-management/import-excel-request-management.component';


const routes: Routes = [
  {
    path: '',
    children: [
      // { path: '', redirectTo: 'danh-muc-he-thong', pathMatch: 'full' },
      {
        path: 'server', component: ListServerComponent,
        // canActivate: [CanActiveService],
        // data: {role: ROLE_LIST.DIRECTORY_PARTNER_VIEW_LIST}
      },
      {
        path: 'server/add', component: DetailServerComponent,
        // canActivate: [CanActiveService],
        // data: {role: ROLE_LIST.DIRECTORY_PARTNER_VIEW_LIST}
      },
      {
        path: 'server/detail/:id', component: DetailServerComponent,
        // canActivate: [CanActiveService],
        // data: {role: ROLE_LIST.DIRECTORY_PARTNER_VIEW_LIST}
      },
      {
        path: 'request', component: ListRequestComponent,
        // canActivate: [CanActiveService],
        // data: {role: ROLE_LIST.DIRECTORY_PARTNER_VIEW_LIST}
      },
      {
        path: 'request/add', component: DetailRequestComponent,
        // canActivate: [CanActiveService],
        // data: {role: ROLE_LIST.DIRECTORY_PARTNER_VIEW_LIST}
      },
      {
        path: 'request/detail/:maYC', component: DetailRequestComponent,
        // canActivate: [CanActiveService],
        // data: {role: ROLE_LIST.DIRECTORY_PARTNER_VIEW_LIST}
      },
      {
        path: 'offer', component: OfferManagementComponent,
        // canActivate: [CanActiveService],
        // data: {role: ROLE_LIST.DIRECTORY_PARTNER_VIEW_LIST}
      },
      {
        path: 'excel', component: ImportExcelManagementComponent,
        // canActivate: [CanActiveService],
        // data: {role: ROLE_LIST.DIRECTORY_PARTNER_VIEW_LIST}
      },
      {
        path: 'excelDR', component: ImportExcelRequestManagementComponent,
        // canActivate: [CanActiveService],
        // data: {role: ROLE_LIST.DIRECTORY_PARTNER_VIEW_LIST}
      },
      {
        path: 'user', component: ListUserComponent,
        // canActivate: [CanActiveService],
        // data: {role: ROLE_LIST.DIRECTORY_PARTNER_VIEW_LIST}
      },
      {
        path: 'user/add', component: DetailUserComponent,
        // canActivate: [CanActiveService],
        // data: {role: ROLE_LIST.DIRECTORY_PARTNER_VIEW_LIST}
      },
      {
        path: 'user/detail/:id', component: DetailUserComponent,
        // canActivate: [CanActiveService],
        // data: {role: ROLE_LIST.DIRECTORY_PARTNER_VIEW_LIST}
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogManagerRoutingModule {
}
