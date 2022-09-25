import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {DA_SERVICE_TOKEN, ITokenService} from '@delon/auth';
import {TranslateService} from '@ngx-translate/core';
import {AuthenticationService} from "../services/authentication/authentication.service";

@Injectable({providedIn: 'root'})
export class CanActiveService implements CanActivate {

  constructor(
    private router: Router,
    private translateService: TranslateService,
    private authenticationService: AuthenticationService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const role = route.data.role;
    if (this.authenticationService.hasPermission(role)) {
      return true;
    } else {
      this.router.navigate(['exception/403']);
      return false
    }
  }
}
