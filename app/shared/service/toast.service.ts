import {Injectable} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ToastrService} from "ngx-toastr";

export enum ToasterPosition {
  bottomRight = 'toast-bottom-right',
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastrService: ToastrService,
    private translateService: TranslateService
  ) {
    this.toastrService.toastrConfig.closeButton = true;
  }

  openSuccessToast(message?: string, title?: string) {
    this.toastrService.success(message, title ? title : this.translateService.instant('common.toastr.title.success'), );
  }

  openErrorToast(message: string, title?: string) {
    this.toastrService.error(message, title ? title : this.translateService.instant('common.toastr.title.error'));
  }

  openWarningToast(message?: string, title?: string) {
    this.toastrService.warning(message, title ? title : this.translateService.instant('common.toastr.title.warning'));
  }

  openInfoToast(message?: string, title?: string) {
    this.toastrService.info(message, title ? title : this.translateService.instant('common.toastr.title.info'));
  }
}
