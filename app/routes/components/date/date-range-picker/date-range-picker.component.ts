import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss'],
})
export class DateRangePickerComponent implements OnInit {
  @Input() labelContent: string;
  @Input() disabled = false;
  @Input() required = false;
  @Input() validRange = false;
  @Input() name = '';
  @Input() span = 16;
  @Input() format = 'DD/MM/YYYY';
  @Input() hideLabel = false;
  @Input() labelHorizontal = true;
  @Input() dateFrom = null;
  @Input() dateTo = null;
  @Input() rangeDate = null;
  @Input() errorTipRequired = 'required';
  @Input() errorTipInvalid = 'invalid';
  @Output() changeDateRange: EventEmitter<Date> = new EventEmitter<Date>();

  validateForm!: FormGroup;

  dateRange: [null, null];

  constructor(private fb: FormBuilder,
  ) {
    this.validateForm = this.fb.group({
      dateRange: [null, [Validators.required, this.dateRangeValidator]],
    });
  }

  ngOnInit() {
    this.dateRange = [this.dateFrom, this.dateTo];
    this.validateForm.setValue({ dateRange: this.dateRange });
  }

  onChangeDateRange(event) {
    this.changeDateRange.emit(event);
  }

  dateRangeValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value || control.value.length === 0) {
      return { required: true };
    } else if (this.validRange) {
      const tempF = new Date(control.value[0].getTime());
      const formDateTemp = tempF.setDate(tempF.getDate() + +this.rangeDate);
      if (formDateTemp !== control.value[1].getTime()) {
        return { rangeError: true, error: true };
      }
    }
    return {};
  };

}
