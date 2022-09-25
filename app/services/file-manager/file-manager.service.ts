import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {_HttpClient} from '@delon/theme';
import {Injectable} from '@angular/core';
import {ToastService} from "@shared";
import {Observable} from "rxjs";
import {environment} from "@env/environment";
import {CommonRouter} from "../../utils";

@Injectable({
  providedIn: 'root',
})
export class FileManagerService {
  constructor(
    private httpClient: _HttpClient,
    private http: HttpClient,
    private toastService: ToastService,
    public translateService: TranslateService,
  ) {
  }

  downloadFile(data, fileName) {
    if (!data || !data.body) {
      this.toastService.openErrorToast(this.translateService.instant('common.toastr.message.error'));
      return;
    }
    const link = document.createElement('a');
    const url = URL.createObjectURL(data.body);
    link.setAttribute('href', url);
    link.setAttribute('download', fileName);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  uploadMultipleFile(files: any, type): Observable<any> {
    const fileData = new FormData();
    files.forEach(file => {
      fileData.append('files', file);
    });

    return this.httpClient.post<any>(
      environment.BASE_API_URI.BASE_SERVICE_API +
      CommonRouter.uploadMultiple + '?type=' + type + '&_allow_anonymous=true',
      fileData, {observe: 'response'})
  }

  private getFile(id): Observable<any>{
    return this.http.get(
      environment.BASE_API_URI.BASE_SERVICE_API +
      CommonRouter.downloadFileById + id + '?_allow_anonymous=true', {
        responseType: 'blob',
        observe: 'response',
      })
  }

  async downloadFileById(id, fileName) {
    const dataFile = await this.getFile(id).toPromise();
    if (dataFile && dataFile.body.size > 0) {
      this.downloadFile(dataFile, fileName);
    } else {
      // this.toastService.openErrorToast(this.translateService.instant('common.import.error.file-not-found'));
    }
  }
}
