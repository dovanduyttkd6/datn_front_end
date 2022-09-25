import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-setting',
  templateUrl: './button-setting.component.html',
  styleUrls: ['./button-setting.component.less']
})
export class ButtonSettingComponent implements OnInit {
  @Input() text: string = null;
  @Input() isDisabled = false;
  @Input() buttonClass: string = null;
  @Input() buttonShape: string = null;
  @Input() buttonType = "danger";
  @Input() buttonSize = 'large';
  @Input() iconClass: string = null;
  @Input() iconTheme = "outline";
  @Input() iconSpin = false;
  @Input() iconFont: string = null;
  @Input() iconRotate: number = null;
  @Output() clickSetting = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openSetting() {
    this.clickSetting.emit();
  }
}
