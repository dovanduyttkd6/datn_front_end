import { Injectable } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { environment } from '@env/environment';
import { AuthenticationRouter } from '../../../utils';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: _HttpClient) {
  }

  login(model: any) {
    return this.http.post(environment.BASE_API_URI.BASE_SERVICE_API + AuthenticationRouter.getToken, model);
  }

  getLoginInfo() {
    return this.http.get(environment.BASE_API_URI.BASE_SERVICE_API + AuthenticationRouter.getLoginInfo);
  }
}
