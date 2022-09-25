import { ControlValueAccessor, NgControl } from '@angular/forms';
import { AfterViewChecked, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Optional, Output, Self, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.less']
})

export class RadioComponent implements ControlValueAccessor, OnInit,OnChanges  {
  @Input() labelContent: string;
  @Input() getObjectValue = false;
  @Input() errorTip: string;
  @Input() placeHolder: string;
  @Input() disabled = false;
  @Input() required = false;
  @Input() data: any[];
  @Input() name = "radio";
  @Input() span = 16;
  @Input() labelHorizontal = true;
  @Input() hideLabel = false;
  @Output() selectChange = new EventEmitter<any>();
  @Input() isOpenCreateModal = false;
  @Input() staticLabelField = true;
  @Input() isNoborder = false;
  @Input() valueField = "id";
  value;

  constructor(
    @Optional() @Self() public ngControl: NgControl,
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (Array.isArray(this.data) && this.data.length > 0 && this.data.find(f => f.selected == true)) {
      this.value = this.data.find(f => f.selected == true)[this.valueField];
    }

  }
  ngOnInit() {
  }
  defaultValue() {
    if (Array.isArray(this.data) && this.data.length > 0 && this.data.find(f => f.selected == true)) {
      this.value = this.data.find(f => f.selected == true)[this.valueField];
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

  handleSelectChange() {
    if (Array.isArray(this.data) && this.data.length > 0) {
      if (this.getObjectValue) {
        const result = this.data.find(x => x.id === this.value);
        this.selectChange.emit(result);
      } else {
        this.selectChange.emit(this.value);
      }
    }
  }
}
