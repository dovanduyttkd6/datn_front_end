import {Component, ElementRef, EventEmitter, Input, OnInit, Optional, Output, Self, ViewChild} from '@angular/core';
import {NgControl} from '@angular/forms';

@Component({
  selector: 'app-input-mobile',
  templateUrl: './input-mobile.component.html',
  styleUrls: ['./input-mobile.component.scss'],
})
export class InputMobileComponent implements OnInit {
  @ViewChild('inputRef', {static: false}) inputRef: ElementRef<HTMLInputElement>;
  @Input() placeHolder = '';
  @Input() hideLabel = false;
  @Input() labelContent;
  @Input() errorTip;
  @Input() disabled = false;
  @Input() required = false;
  @Input() span = 16;
  @Input() maxLength = 12;
  @Input() isInputGroup = false;
  @Input() errorTipRequired = '';
  @Input() errorTipInvalid = 'common.message.mobile-invalid';
  @Input() nzSize = 'large';
  @Input() isNoSpace = false;
  @Output() eventFocus = new EventEmitter<any>();
  @Output() eventBlur = new EventEmitter<any>();

  isFocused = false;

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

  onFocus(event: any) {
    this.isFocused = true;
    this.eventFocus.emit(event);
  }

  onBlur(event: any) {
    this.isFocused = false;
    this.eventBlur.emit(event);
  }

  onClear() {
    this.ngControl.control.setValue(null);
  }

}
