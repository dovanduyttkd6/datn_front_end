import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EMPLOYEE, INSTALLATION} from '../../../utils';

type ModeTag = 'closeable' | 'default' | 'checkable';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.less'],
})
export class TagComponent implements OnInit {
  @Input() color;
  @Input() mode: ModeTag = 'default';
  @Input() isChecked = false;
  @Input() hasBorderRadius = false;
  @Input() tagClass: string;
  @Input() isClickable = false;
  @Output() close = new EventEmitter<MouseEvent>();
  @Output() checkedChange = new EventEmitter<boolean>();

  colorCode: string;
 STATUS = INSTALLATION.INSTALLATION_STATUS;
 CONNECT = INSTALLATION.INSTALLATION_CONNECT;

  constructor() {
  }

  ngOnInit() {
    switch (this.color) {
      case 'active':
        this.colorCode = '#36c6d3';
        break;
      case 'inActive':
        this.colorCode = '#f1c40f';
        break;
      case this.STATUS.FAIL:
        this.colorCode = 'red';
        break;
      case this.STATUS.YES:
        this.colorCode = 'green';
        break;
      case this.STATUS.NO:
        this.colorCode = 'white';
        break;
      case this.CONNECT.NO:
        this.colorCode = 'red';
        break;
      case this.CONNECT.YES:
        this.colorCode = 'green';
    }
  }

  handleOnClose(event: MouseEvent) {
    this.close.emit(event);
  }

  handleCheckedChange(event: boolean) {
    this.checkedChange.emit(event);
  }

}
