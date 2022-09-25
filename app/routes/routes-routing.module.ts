import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {environment} from '@env/environment';
import {LayoutProComponent} from '@brand';

const routes: Routes = [
  {
    path: '',
    component: LayoutProComponent,
    children: [
      // {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      // comment for disable sso
      {path: '', redirectTo: 'auth-sso', pathMatch: 'full'},
      // { path: 'dashboard', component: DashboardComponent },
      // Exception
      {
        path: 'exception',
        // loadChildren: './exception/exception.module#ExceptionModule',
        loadChildren: () => import('./exception/exception.module').then(m => m.ExceptionModule),
      },
      {
        path: 'catalog-management',
        loadChildren: () => import('./catalog-manager/catalog-manager.module').then(m => m.CatalogManagerModule),
      },
      // {
      //   path: 'partner-profile-management',
      //   loadChildren: () => import('./partner-profile-management/partner-profile-management.module').then(m => m.PartnerProfileManagementModule),
      // },
      {
        path: 'auth-sso',
        loadChildren: () => import('../auth/auth-sso.module').then(m => m.AuthSsoModule),
      },
      // {
      //   path: 'permission',
      //   loadChildren: () => import('./permission/permission.module').then(m => m.PermissionModule),
      // },
      // {
      //   path: 'cost-revenue-management',
      //   loadChildren: () => import('./ql-doanh-thu-chi-phi-loi-nhuan/ql-doanh-thu-chi-phi-loi-nhuan.module').then(m => m.QlDoanhThuChiPhiLoiNhuanModule),
      // },


    ],
  },
  // Single page not wrapped Layout
  {path: '**', redirectTo: 'exception/404'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
      // Pls refer to https://ng-alain.com/components/reuse-tab
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class RouteRoutingModule {
}
