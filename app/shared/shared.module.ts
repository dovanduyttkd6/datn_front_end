import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
// delon
import {AlainThemeModule} from '@delon/theme';
import {DelonABCModule} from '@delon/abc';
import {DelonChartModule} from '@delon/chart';
import {DelonACLModule} from '@delon/acl';
import {DelonFormModule} from '@delon/form';
// i18n
import {TranslateModule} from '@ngx-translate/core';
// #region third libs
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {CountdownModule} from 'ngx-countdown';
import {DragDropModule} from '@angular/cdk/drag-drop';
// #region your componets & directives
import {PRO_SHARED_COMPONENTS} from '../layout/pro';
import {LangsComponent} from './components/langs/langs.component';
import {DelayDirective} from './components/delay/delay.directive';
import {MasonryDirective} from './components/masonry/masonry.directive';
import {ScrollbarDirective} from './components/scrollbar/scrollbar.directive';
import {FileManagerComponent} from './components/file-manager/file-manager.component';
import {StatusLabelComponent} from './components/status-label/status-label.component';
import {AddressComponent} from './components/address/address.component';
import {MessagesComponent} from './components/messages/messages.component';
import {LoadingComponent} from "@shared/components/loading/loading.component";

import {NgSelectModule} from '@ng-select/ng-select';
import {MouseFocusDirective} from './components/mouse-focus/mouse-focus.directive';
import {DatePickerUtcDirective} from '@shared/directives/date-picker-utc.directive';
import {HasPermissionDirective} from '@shared/directives/has-permission.directive';
import {HasMultiPermissionDirective} from '@shared/directives/has-multi-permission.directive';
import {ToastrModule} from 'ngx-toastr';
import {NoSpaceDirective} from './directives/no-space.directive';
import {MobileDirective} from "@shared/directives/mobile.directive";
import {NumberDirective} from "@shared/directives/number.directive";
import {NgxSpinnerModule} from "ngx-spinner";
import {SafePipe} from "@shared/pipe/safe.pipe";
import {TrimSpaceDirective} from "@shared/directives/trim-space.directive";
import {NoSpecialCharacterDirective} from "@shared/directives/no-special-character.directive";

const THIRDMODULES = [
  NgZorroAntdModule,
  CountdownModule,
  DragDropModule,
  NgSelectModule,
  NgxSpinnerModule
];
// #endregion

const COMPONENTS_ENTRY = [
  LangsComponent,
  FileManagerComponent,
  StatusLabelComponent,
  AddressComponent,
  MessagesComponent,
  LoadingComponent
];
const COMPONENTS = [...COMPONENTS_ENTRY, ...PRO_SHARED_COMPONENTS];
const DIRECTIVES = [
  DelayDirective,
  MasonryDirective,
  ScrollbarDirective,
  MouseFocusDirective,
  DatePickerUtcDirective,
  HasMultiPermissionDirective,
  HasPermissionDirective,
  NoSpaceDirective,
  MobileDirective,
  NumberDirective,
  TrimSpaceDirective,
  NoSpecialCharacterDirective
];

const PIPE = [
  SafePipe
];

// #endregion

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AlainThemeModule.forChild(),
    DelonABCModule,
    DelonChartModule,
    DelonACLModule,
    DelonFormModule,
    // third libs
    ...THIRDMODULES,
    ToastrModule.forRoot()
  ],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPE
  ],
  entryComponents: COMPONENTS_ENTRY,
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AlainThemeModule,
    DelonABCModule,
    DelonChartModule,
    DelonACLModule,
    DelonFormModule,
    // i18n
    TranslateModule,
    // third libs
    ...THIRDMODULES,
    ToastrModule,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPE
  ],
})
export class SharedModule {
}
