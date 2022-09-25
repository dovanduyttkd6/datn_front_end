import {HttpErrorResponse} from '@angular/common/http';
import {Inject, Injectable, Injector} from '@angular/core';

import {NzNotificationService} from 'ng-zorro-antd';
import {I18NService} from '@core/i18n/i18n.service';
import {ALAIN_I18N_TOKEN} from '@delon/theme';
import {ToastService} from "@shared";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root',
})
export class ErrorMessageService {

  constructor(
    private injector: Injector,
    @Inject(ALAIN_I18N_TOKEN)
    private i18n: I18NService,
    private toastService: ToastService,
    public translateService: TranslateService
  ) {
  }

  messages: string[] = [];

  private get notification(): NzNotificationService {
    return this.injector.get(NzNotificationService);
  }

  handle(ev: HttpErrorResponse) {
    switch (ev.status) {
      case 0:
        this.toastService.openErrorToast(this.translateService.instant('http.request.error.contact-system-admin'));
        break;
      case 500:
        this.toastService.openErrorToast(this.translateService.instant('http.request.error.contact-system-admin'));
        break;
      default:
        if (ev.error instanceof Blob) {
          this.handleBlobResponseMessage(ev.error);
        } else {
          if (ev.error && ev.error.message)
            this.showMessageCode(ev.error.message);
          else
            // this.showMessage(`${this.i18n.fanyi('http.request.error')} ${ev.status}: ${ev.message}`);
            this.toastService.openErrorToast(this.translateService.instant('http.request.error.contact-system-admin'));
        }
    }
  }

  handleBlobResponseMessage(error: Blob) {
    const reader = new FileReader();
    // This fires after the blob has been read/loaded.
    reader.addEventListener('loadend', (e) => {
      const text = (e.target as FileReader).result;

      const response = JSON.parse(text as string);
      this.showMessageCode(response.message);
    });

    // Start reading the blob as text.
    reader.readAsText(error);
  }

  showMessage(content: string, title: string = `${this.i18n.fanyi('http.request.error.unknown.title')}`) {
    this.toastService.openErrorToast(
      content,
      title,
    );
  }

  showMessageCode(code) {
    code = code.replace('An error was occur, read this message for more details: ', '');
    switch (code) {
      case 'TokenExpired':
        this.showMessage(`${this.i18n.fanyi('message.error.download-link.token-expired')}`);
        break;
      case 'TokenInvalid':
        this.showMessage(`${this.i18n.fanyi('message.error.download-link.token-invalid')}`);
        break;
      case 'InvalidToken':
        this.showMessage(`${this.i18n.fanyi('message.error.download-link.invalid-token')}`);
        break;
      case 'InvalidUser':
        this.showMessage(`${this.i18n.fanyi('message.error.download-link.invalid-user')}`);
        break;
      case 'UserNotFound':
        this.showMessage(`${this.i18n.fanyi('message.error.download-link.user-not-found')}`);
        break;
      case 'UsernameUsed':
        this.showMessage(`${this.i18n.fanyi('message.error.download-link.user-name-used')}`);
        break;
      case 'EmailUsed':
        this.showMessage(`${this.i18n.fanyi('message.error.download-link.email-used')}`);
        break;
      case 'FtpUserNotFound':
        this.showMessage(`${this.i18n.fanyi('message.error.ftp-user.not-found')}`);
        break;
      case 'InvalidDateRange':
        this.showMessage(`${this.i18n.fanyi('message.error.ke-hoach-hieu-chinh.not-found')}`);
        break;
      default:
        this.showMessage(`${code}`, this.i18n.fanyi('common.toastr.title.error'));
        break;
    }
  }

}
