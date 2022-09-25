import { formatDate } from '@angular/common';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Optional, Output, Self } from '@angular/core';

@Component({
  selector: 'app-date-picker-time',
  templateUrl: './date-picker-time.component.html',
  styleUrls: ['./date-picker-time.component.less'],
})
export class DatePickerTimeComponent implements OnInit, ControlValueAccessor {
  @Input() labelContent: string;
  @Input() errorTip: string;
  @Input() disabled = false;
  @Input() required = false;
  @Input() name = 'birthdate';
  @Input() span = 16;
  @Input() format = 'DD/MM/YYYY HH:mm';
  @Input() hideLabel = false;
  @Input() labelHorizontal = true;
  @Output() changeDateTime: EventEmitter<Date> = new EventEmitter<Date>();

  dateTime: string;

  constructor(
    @Optional() @Self() public ngControl: NgControl,
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
  }

  writeValue(obj: any): void {
    if (obj && obj !== 'Invalid Date') {
      this.dateTime = formatDate(obj, 'yyyy-MM-ddTHH:mm:ss', 'en-US');
    }
    if (obj == null) {
      this.dateTime = null;
    }
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onChangeDate(event) {
    const value = new Date(event.target.value);
    if (value.toString() === 'Invalid Date') {
      this.ngControl.control.setValue(new Date());
    } else {
      this.ngControl.control.setValue(new Date(event.target.value));
    }
    this.changeDateTime.emit(new Date(event.target.value));
  }

  private toDateString(date: Date): string {
    if (!JSON.stringify(date) && date != null) {
      return (date.getFullYear().toString() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + (date.getDate())).slice(-2))
        + 'T' + date.toTimeString().slice(0, 5);
    }
  }
}
