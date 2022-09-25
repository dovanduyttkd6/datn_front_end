import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-save',
  templateUrl: './button-save.component.html',
  styleUrls: ['./button-save.component.less']
})
export class ButtonSaveComponent implements OnInit {
  @Input() text: string = null;
  @Input() loading = false;
  @Input() buttonType = "primary";
  @Input() buttonSize = "large";
  @Input() isIcon = false;
  @Input() disabled = false;
  @Input() popConfirm = false;
  @Input() confirmOkI18n = "layout.confirm.save.confirm.accept";
  @Input() confirmCancelI18n = "layout.confirm.save.confirm.cancel";
  @Input() confirmTitleI18n = "layout.confirm.save";
  @Output() clickSave = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickSave() {
    this.clickSave.emit();
  }
}
