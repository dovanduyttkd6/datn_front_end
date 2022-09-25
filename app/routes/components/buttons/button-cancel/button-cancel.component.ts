import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-cancel',
  templateUrl: './button-cancel.component.html',
  styleUrls: ['./button-cancel.component.less']
})
export class ButtonCancelComponent implements OnInit {
  @Input() text = null;
  @Input() buttonType = "default";
  @Input() buttonSize = "large";
  @Input() popConfirm = true;
  @Input() confirmOkI18n = "layout.confirm.cancel.confirm.accept";
  @Input() confirmCancelI18n = "layout.confirm.cancel.confirm.cancel";
  @Input() confirmTitleI18n = "layout.confirm.discard-change";
  @Input() isIcon = false;
  @Output() clickCancel = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onConfirm() {
    this.clickCancel.emit();
  }
}
