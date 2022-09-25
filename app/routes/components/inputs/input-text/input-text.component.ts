import {ControlValueAccessor, NgControl} from '@angular/forms';
import {Component, ElementRef, EventEmitter, Input, OnInit, Optional, Output, Self, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.less'],
})
export class InputTextComponent implements ControlValueAccessor, OnInit {
  @ViewChild('inputRef', {static: false}) inputRef: ElementRef<HTMLInputElement>;
  @Input() type = 'text';
  @Input() labelContent;
  @Input() errorTip;
  @Input() disabled = false;
  @Input() required = false;
  @Input() span = 16;
  @Input() hideLabel = false;
  @Input() placeHolder = '';
  @Input() nzSize = 'large';
  @Input() maxLength = 1024;
  @Input() hiddenClear = false;
  @Input() isNoSpace = false;
  @Input() isNumber = false;
  @Input() max = 30;
  @Input() isSpecialDisable = false;
  @Input() indexCheck = 1;
  @Output() eventFocus = new EventEmitter<any>();
  @Output() eventBlur = new EventEmitter<any>();
  @Output() onChange = new EventEmitter<any>();
  @Input() isNgModel;
  @Input() isUpperCase = false;
  model: any;


  isFocused = false;

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private translateService: TranslateService,
  ) {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit() {
    if (!this.errorTip) {
      this.errorTip = this.labelContent + ' ' + this.translateService.instant('common.message.error.require');
    }
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
