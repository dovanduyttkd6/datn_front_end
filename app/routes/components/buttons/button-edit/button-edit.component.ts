import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-edit',
  templateUrl: './button-edit.component.html',
  styleUrls: ['./button-edit.component.less']
})
export class ButtonEditComponent implements OnInit {
  @Input() text: string = null;
  @Input() isDisabled = false;
  @Input() buttonClass: string = null;
  @Input() buttonShape: string = null;
  @Input() buttonType = "primary";
  @Input() buttonSize = 'large';
  @Input() iconClass: string = null;
  @Input() iconType = "edit";
  @Input() iconTheme = "outline";
  @Input() iconSpin = false;
  @Input() iconFont: string = null;
  @Input() iconRotate: number = null;
  @Output() clickEdit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openEdit() {
    this.clickEdit.emit();
  }
}
