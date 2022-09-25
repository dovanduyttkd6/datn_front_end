import {NgControl} from '@angular/forms';
import {Component, ElementRef, EventEmitter, Input, OnInit, Optional, Output, Self, ViewChild} from '@angular/core';

@Component({
  selector: 'app-input-multiple-email',
  templateUrl: './input-multiple-email.component.html',
  styleUrls: ['./input-multiple-email.component.less'],
})
export class InputMultipleEmailComponent implements OnInit {
  @ViewChild('inputTextareaRef', {static: false}) inputTextareaRef: ElementRef<HTMLInputElement>;
  @Input() placeHolder = '';
  @Input() hideLabel = false;
  @Input() labelContent;
  @Input() errorTip;
  @Input() disabled = false;
  @Input() required = false;
  @Input() span = 20;
  @Input() isInputGroup = false;
  @Input() errorTipRequired = '';
  @Input() errorTipInvalid = '';
  @Input() minRows = 5;
  @Input() maxRows = 8;
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

  focus() {
    this.inputTextareaRef.nativeElement.focus();
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
