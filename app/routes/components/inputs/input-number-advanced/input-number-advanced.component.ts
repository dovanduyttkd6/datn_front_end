import {Component, EventEmitter, Input, OnInit, Optional, Output, Self} from '@angular/core';
import {NgControl} from '@angular/forms';
import {CurrencyPipe, DecimalPipe} from '@angular/common';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-input-number-advanced',
  templateUrl: './input-number-advanced.component.html',
  styleUrls: ['./input-number-advanced.component.less'],
  providers: [CurrencyPipe, DecimalPipe],
})

export class InputNumberAdvancedComponent implements OnInit {
  @Input() labelContent: string;
  @Input() hideLabel = false;
  @Input() errorTip: string;
  @Input() disabled = false;
  @Input() required = false;
  @Input() placeHolder = '';
  @Input() span = 16;
  @Input() labelHorizontal = true;
  @Input() nzMin = null;
  @Input() nzMax = null;
  @Input() formatNumber = true;
  @Output() eventBlur = new EventEmitter;
  @Input() digit = '1.0-3'
  @Input() nzSize = 'large';

  numberInput: number;
  numberFormatResult: string;
  region = 'vi-VN';
  isFocused = false;

  constructor(@Optional() @Self() public ngControl: NgControl, private decimalPipe: DecimalPipe, private translate: TranslateService) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
    if (!this.errorTip) {
      this.errorTip = this.labelContent + ' ' + this.translate.instant('common.message.error.require');
    }
  }

  writeValue(obj: any): void {
    if (typeof obj === 'number' && this.formatNumber) {
      this.numberFormatResult = this.decimalPipe.transform(obj, this.digit, '');
    } else this.numberFormatResult = obj;
  }

  onChange = (numberOutput: number) => {
  };

  onTouched = () => {
  };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    if (this.formatNumber) {
      this.numberFormatResult = this.decimalPipe.transform(this.numberInput, this.digit, '');
      if (this.numberFormatResult) {
        this.numberFormatResult = this.numberFormatResult.trim();
      }
    }
    this.isFocused = false;
    this.eventBlur.emit();
  }

  onModelChange(value) {
    if (value === null) {
      this.numberFormatResult = null;
      return;
    }
    if (typeof value === 'string') {
      const result = this.region === 'vi-VN' ? value.replace(/\./g, '').replace(/\,/g, '.') : value.replace(/\,/g, '');
      this.numberInput = parseFloat(result);
    } else if (typeof value === 'number') this.numberInput = value;
    if (!this.isFocused) {
      if (this.nzMax !== null && this.numberInput > this.nzMax) {
        this.numberInput = this.nzMax;
      }
      if (this.nzMin !== null && this.numberInput < this.nzMin) {
        this.numberInput = this.nzMin;
      }
      if (this.formatNumber) {
        this.numberFormatResult = this.decimalPipe.transform(this.numberInput, this.digit, '');
        if (this.numberFormatResult) {
          this.numberFormatResult = this.numberFormatResult.trim();
        }
      }
    }
    this.onChange(this.numberInput);
  }

  preventNegative(event) {
    const pattern = /[0-9/.]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  onClear() {
    this.ngControl.control.setValue(null);
    this.numberFormatResult = null;
    this.numberInput = null;
  }
}
