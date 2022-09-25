import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'exception-500',
  templateUrl: './500.html',
})
export class Exception500Component {
  constructor(modalSrv: NzModalService) {
    modalSrv.closeAll();
  }
}
