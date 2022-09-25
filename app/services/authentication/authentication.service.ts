import {Inject, Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {Observable} from 'rxjs';
import {AuthenticationRouter} from 'src/app/utils';
import {_HttpClient} from '@delon/theme';
import {DA_SERVICE_TOKEN, ITokenService} from '@delon/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  constructor(
    private httpClient: _HttpClient,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
  ) {
  }

  public login(SSOToken: string): Observable<any> {
    const url = `${environment.BASE_API_URI.BASE_SERVICE_API}vhkt-service/token`;
    // return this.httpClient.get(url + "?tokenSSO=" + SSOToken + '&_allow_anonymous=true', {responseType: 'text'});
    return this.httpClient.get(url + "?tokenSSO=" + encodeURIComponent(SSOToken) + '&_allow_anonymous=true', {responseType: 'text'});
  }

  public getPermission(employeeCode: string): Observable<any> {
    const url = `${environment.BASE_API_URI.BASE_SERVICE_API}vhkt-service/get-permission`;
    return this.httpClient.get(url + "?employeeCode=" + employeeCode);
  }

  fetch(): Observable<any> {
    return this.httpClient.get(environment.BASE_API_URI.BASE_SERVICE_API + AuthenticationRouter.refreshToken);
  }

  hasPermission(resourceCode: string): boolean {
    if (!resourceCode) {
      return false;
    }
    if(localStorage.getItem('role')){
      const roles = JSON.parse(localStorage.getItem('role')).roleList;
      return roles.filter(f => (f != null && f === resourceCode)).length > 0;
    }else{
      return false;
    }

  }


}


