import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "@env/environment";
import {CommonRouter} from "../../utils";
import {_HttpClient, SettingsService} from "@delon/theme";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../authentication/authentication.service";
import {DA_SERVICE_TOKEN, ITokenService} from "@delon/auth";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

   loginName = new BehaviorSubject("");

  constructor(
    private httpClient: _HttpClient,
    private http: HttpClient,
    private settingsService: SettingsService,
    public settings: SettingsService,
    private authenticateService: AuthenticationService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
  ) {
  }
  onChangeLoginName(value){
    this.loginName.next(value);
  }

  downloadFileById(id: any): Observable<any> {
    return this.http.get(
      environment.BASE_API_URI.BASE_SERVICE_API +
      CommonRouter.downloadFileById + id , {
        observe: 'response',
      });
  }

  logoutAction() {
    this.tokenService.clear();
    this.settingsService.setUser({});
    localStorage.setItem('role', '');
    const URL = environment.BASE_API_URI.SSO_ADDRESS + '/logout?service=';
    const serviceUrl = environment.BASE_API_URI.CLIENT_ADDRESS + "/";
    window.location.href = URL + this.toUrlString(serviceUrl);
  }

  private toUrlString(src: any) {
    let dest = src;
    while (dest.indexOf(':') >= 0) {
      dest = dest.replace(':', '%3A');
    }
    while (dest.indexOf('/') >= 0) {
      dest = dest.replace('/', '%2F');
    }
    return dest;
  }

}
