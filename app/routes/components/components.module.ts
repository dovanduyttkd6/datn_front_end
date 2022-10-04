import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SharedModule} from '@shared';
import {ButtonBaseComponent} from './buttons/button-base/button-base.component';
import {ButtonCancelComponent} from './buttons/button-cancel/button-cancel.component';
import {ButtonCreateComponent} from './buttons/button-create/button-create.component';
import {ButtonEditComponent} from './buttons/button-edit/button-edit.component';
import {ButtonSaveComponent} from './buttons/button-save/button-save.component';
import {DatePickerTimeComponent} from './date/date-picker-time/date-picker-time.component';
import {DatePickerComponent} from './date/date-picker/date-picker.component';
import {DateRangePickerComponent} from './date/date-range-picker/date-range-picker.component';
import {UploadFileAttachmentComponent} from './upload-file-attachment/upload-file-attachment.component';
import {InputEmailComponent} from './inputs/input-email/input-email.component';
import {InputMultipleEmailComponent} from './inputs/input-multiple-email/input-multiple-email.component';
import {InputMobileComponent} from './inputs/input-mobile/input-mobile.component';
import {InputNumberAdvancedComponent} from './inputs/input-number-advanced/input-number-advanced.component';
import {InputNumberComponent} from './inputs/input-number/input-number.component';
import {InputPasswordComponent} from './inputs/input-password/input-password.component';
import {InputTextComponent} from './inputs/input-text/input-text.component';
import {InputTextareaComponent} from './inputs/input-textarea/input-textarea.component';
import {LabelHorizontalComponent} from './labels/label-horizontal/label-horizontal.component';
import {LabelKibanaComponent} from './labels/label-kibana/label-kibana.component';
import {LabelVerticalComponent} from './labels/label-vertical/label-vertical.component';
import {SelectComponent} from './selects/select/select.component';
import {TabsComponent} from './tabs/tabs.component';
import {TitleHeaderLayoutComponent} from './title-header-layout/title-header-layout.component';
import {ModalConfirmComponent} from './modals/modal-confirm/modal-confirm.component';
import {RadioComponent} from './radio/radio.component';
import {ButtonConfirmComponent} from './buttons/button-confirm/button-confirm.component';
import {CustomDateRangePickerComponent} from './date/custom-date-range-picker/custom-date-range-picker.component';
import {LabelFormDataComponent} from './labels/label-form-data/label-form-data.component';
import {ShowHideColumnsComponent} from './show-hide-columns/show-hide-columns.component';
import {ButtonExportComponent} from "./buttons/button-export/button-export.component";
import {SvgDownloadComponent} from './svg/svg-download/svg-download.component';
import {SvgCreateComponent} from './svg/svg-create/svg-create.component';
import {SvgToggleColumnsComponent} from './svg/svg-toggle-columns/svg-toggle-columns.component';
import {SvgDeleteComponent} from './svg/svg-delete/svg-delete.component';
import {SvgEditComponent} from './svg/svg-edit/svg-edit.component';
import {TagComponent} from "./tag/tag.component";
import {SvgViewComponent} from './svg/svg-view/svg-view.component';
import {SvgSelectedComponent} from './svg/svg-selected/svg-selected.component';
import {TreeSelectComponent} from './selects/tree-select/tree-select.component';
import {SvgUploadFileComponent} from './svg/svg-upload-file/svg-upload-file.component';
import {SvgFolderComponent} from './svg/svg-folder/svg-folder.component';
import {AutoCompleteComponent} from './auto-complete/auto-complete.component';
import {BreadcrumbComponent} from "./breadcrumb/breadcrumb.component";
import {PagingComponent} from "./paging/paging.component";
import {ButtonDeleteComponent} from './buttons/button-delete/button-delete.component';
import {ButtonIconComponent} from './buttons/button-icon/button-icon.component';
import { ButtonUploadComponent } from './buttons/button-upload/button-upload.component';
import { NoResultComponent } from './no-result/no-result.component';
import { ButtonSortComponent } from './buttons/button-sort/button-sort.component';
import { ButtonRunComponent } from './buttons/button-run/button-run.component';

@NgModule({
  declarations: [
    TitleHeaderLayoutComponent,
    LabelVerticalComponent,
    LabelKibanaComponent,
    LabelHorizontalComponent,
    ButtonSaveComponent,
    ButtonEditComponent,
    ButtonCreateComponent,
    ButtonCancelComponent,
    ButtonBaseComponent,
    ButtonConfirmComponent,
    DatePickerComponent,
    SelectComponent,
    InputTextComponent,
    InputEmailComponent,
    InputMultipleEmailComponent,
    InputNumberComponent,
    InputTextareaComponent,
    DatePickerTimeComponent,
    InputPasswordComponent,
    TabsComponent,
    UploadFileAttachmentComponent,
    InputNumberAdvancedComponent,
    InputMobileComponent,
    DateRangePickerComponent,
    ModalConfirmComponent,
    RadioComponent,
    CustomDateRangePickerComponent,
    LabelFormDataComponent,
    ShowHideColumnsComponent,
    ButtonExportComponent,
    SvgDownloadComponent,
    SvgCreateComponent,
    SvgToggleColumnsComponent,
    SvgDeleteComponent,
    SvgEditComponent,
    TagComponent,
    SvgViewComponent,
    SvgSelectedComponent,
    TreeSelectComponent,
    SvgUploadFileComponent,
    SvgFolderComponent,
    AutoCompleteComponent,
    BreadcrumbComponent,
    PagingComponent,
    ButtonDeleteComponent,
    ButtonIconComponent,
    ButtonUploadComponent,
    NoResultComponent,
    ButtonSortComponent,
    ButtonRunComponent
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    TitleHeaderLayoutComponent,
    LabelVerticalComponent,
    LabelKibanaComponent,
    LabelHorizontalComponent,
    ButtonSaveComponent,
    ButtonEditComponent,
    ButtonCreateComponent,
    ButtonCancelComponent,
    ButtonBaseComponent,
    ButtonConfirmComponent,
    DatePickerComponent,
    SelectComponent,
    InputTextComponent,
    InputEmailComponent,
    InputMultipleEmailComponent,
    InputNumberComponent,
    InputTextareaComponent,
    DatePickerTimeComponent,
    InputPasswordComponent,
    TabsComponent,
    UploadFileAttachmentComponent,
    InputNumberAdvancedComponent,
    InputMobileComponent,
    ModalConfirmComponent,
    RadioComponent,
    DateRangePickerComponent,
    CustomDateRangePickerComponent,
    LabelFormDataComponent,
    ShowHideColumnsComponent,
    ButtonExportComponent,
    SvgDownloadComponent,
    SvgCreateComponent,
    SvgToggleColumnsComponent,
    SvgDeleteComponent,
    SvgEditComponent,
    TagComponent,
    SvgViewComponent,
    SvgSelectedComponent,
    SvgUploadFileComponent,
    TreeSelectComponent,
    AutoCompleteComponent,
    BreadcrumbComponent,
    PagingComponent,
    ButtonDeleteComponent,
    ButtonIconComponent,
    ButtonUploadComponent,
    NoResultComponent,
    ButtonSortComponent,
    ButtonRunComponent,
    SvgFolderComponent
  ],
})
export class ComponentsModule {
}
