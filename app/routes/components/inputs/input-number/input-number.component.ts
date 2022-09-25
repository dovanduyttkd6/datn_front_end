import {ControlValueAccessor, NgControl} from '@angular/forms';
import {Component, ElementRef, EventEmitter, Input, OnInit, Optional, Output, Self, ViewChild} from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.less'],
})
export class InputNumberComponent implements ControlValueAccessor, OnInit {
  @ViewChild('inputRef', {static: false}) inputRef: ElementRef<HTMLInputElement>;
  @Input() type = 'text';
  @Input() labelContent: string;
  @Input() hideLabel = false;
  @Input() min = 0;
  @Input() max: number;
  @Input() step = 1;
  @Input() errorTip: string;
  @Input() disabled = false;
  @Input() required = false;
  @Input() span = 16;
  @Input() labelHorizontal = true;
  @Input() placeHolder = '';
  @Input() nzSize = 'large';
  @Output() eventFocus = new EventEmitter<any>();
  @Output() eventBlur = new EventEmitter<any>();

  isFocused = false;

  constructor(@Optional() @Self() public ngControl: NgControl) {
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
