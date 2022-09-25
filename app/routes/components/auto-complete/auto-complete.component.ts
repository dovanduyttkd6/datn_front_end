import {Component, ElementRef, EventEmitter, Input, OnInit, Optional, Output, Self, ViewChild} from '@angular/core';
import {ControlValueAccessor, NgControl} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.less']
})
export class AutoCompleteComponent implements ControlValueAccessor, OnInit {

  @ViewChild('inputRef', {static: false}) inputRef: ElementRef<HTMLInputElement>;
  @Input() type = 'text';
  @Input() labelContent;
  @Input() errorTip;
  @Input() fieldYear = false
  @Input() disabled = false;
  @Input() required = false;
  @Input() span = 16;
  @Input() hideLabel = false;
  @Input() placeHolder = '';
  @Input() nzSize = 'large';
  @Input() maxLength = 1024;
  @Input() hiddenClear = false;
  @Input() isNoSpace = false;
  @Output() eventFocus = new EventEmitter<any>();
  @Output() eventBlur = new EventEmitter<any>();
  @Input() data = []
  options: any;

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
    this.options = this.data;
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
    if (!event) {
      this.options = this.data
    } else {
      this.options = this.data.filter(i => {
          return i.label.indexOf(event) !== -1
        }
      );
    }
  }

  onBlur(event: any) {
    this.isFocused = false;
    let item = event;
    this.data.forEach(i => {
      if (event == i.label) {
        item = i;
      }
    })
    this.eventBlur.emit(item);
  }

  onClear() {
    this.ngControl.control.setValue(null);
  }

  compareFun = (o1: Option | string, o2: Option): boolean => {
    if (o1) {
      return typeof o1 === 'string' ? o1 === o2.label : o1.value === o2.value;
    } else {
      return false;
    }
  };

  onChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    if (!value) {
      this.options = this.data
    } else {
      this.options = this.data.filter(i => {
          return i.label.indexOf(value) !== -1
        }
      );
    }
  }


}

interface Option {
  label: string;
  value: string;
  name: string;
}
