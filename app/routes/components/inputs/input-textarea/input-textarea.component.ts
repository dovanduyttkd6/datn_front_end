import {ControlValueAccessor, NgControl} from '@angular/forms';
import {Component, EventEmitter, Input, OnInit, Optional, Output, Self} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.scss'],
})
export class InputTextareaComponent implements ControlValueAccessor, OnInit {
  @Input() labelContent: string;
  @Input() placeHolder: string;
  @Input() isPlaceHolder = false;
  @Input() errorTip: string;
  @Input() disabled = false;
  @Input() required = false;
  @Input() span = 16;
  @Input() labelHorizontal = true;
  @Input() minRows = 3;
  @Input() maxRows = 3;
  @Input() hideLabel = false;
  @Input() maxLength = 5000;
  @Input() isFullWidth = false;
  @Output() eventFocus = new EventEmitter<any>();
  @Output() eventBlur = new EventEmitter<any>();

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

  onFocus(event: any) {
    this.isFocused = true;
    this.eventFocus.emit(event);
  }

  onBlur(event: any) {
    this.isFocused = false;
    this.eventBlur.emit(event);
    this.ngControl.control.setValue(this.ngControl.control.value.trim());
  }

  onClear() {
    this.ngControl.control.setValue(null);
  }
}
