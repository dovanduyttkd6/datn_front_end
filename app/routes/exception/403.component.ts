import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'exception-403',
  templateUrl: './403.html',
})
export class Exception403Component {
  constructor(modalSrv: NzModalService) {
    modalSrv.closeAll();
  }
}
