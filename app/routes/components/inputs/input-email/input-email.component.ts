import {NgControl} from '@angular/forms';
import {Component, ElementRef, EventEmitter, Input, OnInit, Optional, Output, Self, ViewChild} from '@angular/core';

@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.less'],
})
export class InputEmailComponent implements OnInit {
  @ViewChild('inputRef', {static: false}) inputRef: ElementRef<HTMLInputElement>;
  @Input() placeHolder = '';
  @Input() hideLabel = false;
  @Input() labelContent;
  @Input() errorTip;
  @Input() disabled = false;
  @Input() required = false;
  @Input() span = 16;
  @Input() isInputGroup = false;
  @Input() errorTipRequired = '';
  @Input() errorTipInvalid = '';
  @Input() maxLength = 100;
  @Input() nzSize = 'large';
  @Output() eventFocus = new EventEmitter<any>();
  @Output() eventBlur = new EventEmitter<any>();

  isFocused = false;
  testSpace: boolean = true;
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

  focus() {
    this.inputRef.nativeElement.focus();
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
