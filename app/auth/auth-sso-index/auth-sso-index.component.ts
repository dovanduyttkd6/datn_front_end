import { Component, OnInit } from '@angular/core';
import {environment} from "@env/environment";

@Component({
  selector: 'auth-sso-index',
  templateUrl: './auth-sso-index.component.html',
  styles: []
})
export class AuthSsoIndexComponent implements OnInit {
  // https://localhost:6443/cas/login?service=http%3A%2F%2Flocalhost%3A4200%2Fauth-sso%2Flogin
  URL = environment.BASE_API_URI.SSO_ADDRESS + '/login?service=';
  serviceUrl = environment.BASE_API_URI.CLIENT_ADDRESS + '/auth-sso/login';
  constructor() {
    window.location.href = this.URL + encodeURIComponent(this.serviceUrl) + '&appCode=' + encodeURIComponent(environment.appCode);
  }
  ngOnInit() {
  }

}
