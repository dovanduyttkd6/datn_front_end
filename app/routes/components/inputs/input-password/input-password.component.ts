import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Component, Input, OnInit, Optional, Self } from '@angular/core';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
})
export class InputPasswordComponent implements ControlValueAccessor, OnInit {
  @Input() type = 'password';
  @Input() labelContent;
  @Input() errorTip;
  @Input() disabled = false;
  @Input() required = false;
  @Input() span = 16;
  @Input() labelHorizontal = true;
  @Input() hideLabel = false;
  @Input() placeHolder = '';
  @Input() isInputGroup = false;
  @Input() errorTipRequired = '';
  @Input() errorTipNotMatch = '';

  passwordVisible = false;

  constructor(
    @Optional() @Self() public ngControl: NgControl,
  ) {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit() {
  }

  writeValue(obj: any): void {
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }

}
