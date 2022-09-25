import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-confirm',
  templateUrl: './button-confirm.component.html',
  styleUrls: ['./button-confirm.component.less'],
})
export class ButtonConfirmComponent implements OnInit {
  @Input() text: string = null;
  @Input() buttonType = 'primary';
  @Input() buttonSize = "large";
  @Input() disableButton = false;
  @Output() clickConfirm = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  confirm() {
    this.clickConfirm.emit();
  }
}
