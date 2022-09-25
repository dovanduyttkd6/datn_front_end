import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-run',
  templateUrl: './button-run.component.html',
  styleUrls: ['./button-run.component.less']
})
export class ButtonRunComponent implements OnInit {
  @Input() text: string;
  @Input() buttonType = "primary";
  @Input() buttonSize = "large";
  @Input() buttonClass: string = null;
  @Input() iconTheme = "outline";
  @Input() disabled = false;
  @Input() buttonShape: string = null;
  @Input() iconClass: string = null;
  @Input() iconSpin = false;
  @Input() loading = false;
  @Input() iconFont: string = null;
  @Input() iconRotate: number = null;
  @Input() popConfirm = false;
  @Input() confirmOkI18n = "layout.confirm.save.confirm.accept";
  @Input() confirmCancelI18n = "layout.confirm.save.confirm.cancel";
  @Input() confirmTitleI18n = "layout.confirm.send";
  @Output() clickAction = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.clickAction.emit();
  }

}
