import {Component, OnInit, Inject, ChangeDetectionStrategy} from '@angular/core';
import {Router} from '@angular/router';
import {SettingsService} from '@delon/theme';
import {DA_SERVICE_TOKEN, ITokenService} from '@delon/auth';
import {AuthenticationService} from "../../../../services/authentication/authentication.service";
import {CommonService} from "../../../../services/common/common.service";

@Component({
  selector: 'layout-pro-user',
  templateUrl: 'user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutProWidgetUserComponent implements OnInit {

  name = "";

  constructor(
    private router: Router,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    private settingsService: SettingsService,
    public settings: SettingsService,
    private authenticateService: AuthenticationService,
    private commonService: CommonService
  ) {
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('_token'));
    if (user) {
      this.name = user.name;
    }
    setTimeout(()=>{
      this.commonService.loginName.subscribe(value => {
        if (value) {
          this.name = value;
        }
      })
    },1)

  }

  logout() {

    this.commonService.logoutAction()
  }
}
