import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TOOLTIP} from '../../../../utils';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.less']
})
export class ButtonIconComponent implements OnInit {
  @Input() text = '';
  @Input() buttonType = 'default';
  @Input() buttonSize = 'large';
  @Input() disabled = false;
  @Input() isEdit = false;
  @Input() isViewDetail = false;
  @Input() isContinue = false;
  @Input() isUploadFile = false;
  @Input() isDelete = false;
  @Input() isAddUser = false;
  @Input() isAddFile = false;
  @Input() isDownloadFile = false;
  @Input() isDownloadAllFile = false;
  @Input() isClose = false;
  @Input() isSyn = false;
  @Input() isTrue = false;
  @Input() tooltipTitle = ''
  @Output() clickAction = new EventEmitter();

  TOOLTIP = TOOLTIP;

  constructor() { }

  ngOnInit() {
  }

  onClickAction() {
    this.clickAction.emit();
  }

}
