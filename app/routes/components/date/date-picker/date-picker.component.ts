import { Component, EventEmitter, Input, OnInit, Optional, Output, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { format } from 'date-fns';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.less'],
})
export class DatePickerComponent implements OnInit, ControlValueAccessor {
  @Input() placeHolder = 'dd/mm/yyyy';
  @Input() labelContent: string;
  @Input() errorTip: string;
  @Input() disabled = false;
  @Input() required = false;
  @Input() name = 'birthdate';
  @Input() span = 16;
  @Input() format = 'DD/MM/YYYY';
  @Input() hideLabel = false;
  @Input() labelHorizontal = true;
  @Input() classWidth: any;
  @Input() isFilterList = false;
  @Input() isVisibilityLabel = false;
  @Output() changeDate: EventEmitter<Date> = new EventEmitter<Date>();

  date: string;

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private translate: TranslateService,
  ) {
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
    if (obj) {
      this.date = format(new Date());
    }
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
