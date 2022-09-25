import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl } from '@angular/forms';
import { format } from 'date-fns';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'app-custom-date-range-picker',
  templateUrl: './custom-date-range-picker.component.html',
  styleUrls: ['./custom-date-range-picker.component.less'],
})
export class CustomDateRangePickerComponent implements OnInit, ControlValueAccessor {
  @Input() placeHolder = '';
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
  @Output() changeDateRange: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('endDatePicker', { static: false }) endDatePicker!: NzDatePickerComponent;

  validateForm: any;

  startValue: Date | null = null;
  endValue: Date | null = null;

  date: string;

  constructor(
    private fb: FormBuilder,
  ) {
    this.validateForm = this.fb.group({
      startDate: new FormControl(null),
      endDate: new FormControl(null),
    });
  }

  ngOnInit() {
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

  disabledStartDate = (startValue: Date): boolean => {
    if (!startValue || !this.endValue) {
      return false;
    }
    return startValue.getTime() > this.endValue.getTime();
  };

  disabledEndDate = (endValue: Date): boolean => {
    if (!endValue || !this.startValue) {
      return false;
    }
    let startTime = this.startValue;
    startTime.setHours(0)
    startTime.setMinutes(0)
    startTime.setSeconds(0);
    startTime.setMilliseconds(0);
    return endValue.getTime() < startTime.getTime() -1;
  };

  handleStartOpenChange(open: boolean): void {

  }

  handleEndOpenChange(open: boolean): void {

  }

  onChangeDate(event) {
    const data = this.validateForm.value;
    this.changeDateRange.emit([data.startDate, data.endDate]);
  }
}
