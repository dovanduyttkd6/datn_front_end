import {Component} from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'exception-404',
  templateUrl: './404.html',
})
export class Exception404Component {
  constructor(modalSrv: NzModalService) {
    modalSrv.closeAll();
  }
}
