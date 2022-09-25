import {ControlValueAccessor, NgControl} from '@angular/forms';
import {Component, EventEmitter, Input, OnInit, Optional, Output, Self} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {TEXT_NO_RESULTS} from 'src/app/utils';

@Component({
  selector: 'app-tree-select',
  templateUrl: './tree-select.component.html',
  styleUrls: ['./tree-select.component.less']
})
export class TreeSelectComponent implements ControlValueAccessor, OnInit {
  @Input() labelContent: string;
  @Input() getObjectValue = false;
  @Input() errorTip: string;
  @Input() expandKeys: any[];
  @Input() placeHolder: string;
  @Input() disabled = false;
  @Input() required = false;
  @Input() data: any[];
  @Input() valueField = 'value';
  @Input() labelField = 'label';
  @Input() customLabelField = '';
  @Input() openSearchModal = true;
  @Input() name = 'select';
  @Input() span = 16;
  @Input() labelHorizontal = true;
  @Input() hideLabel = false;
  @Input() nzMode = 'default';
  @Input() nzSize = 'large';
  @Input() isOpenCreateModal = false;
  @Input() staticLabelField = true;
  @Input() isVisibilityLabel = false;
  @Input() isCustomLabel = false;
  @Output() clickSearch = new EventEmitter<string>();
  @Output() clickOpenSearch = new EventEmitter();
  @Output() selectChange = new EventEmitter<any>();
  @Output() test123 = new EventEmitter<any>();

  value: any;
  notFoundContent = TEXT_NO_RESULTS;

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private translateService: TranslateService,
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
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

  handleSelectChange() {
    if (Array.isArray(this.data) && this.data.length > 0) {
      if (this.getObjectValue) {
        const result = Array.isArray(this.value) ?
          this.value.map(x => this.data.find(y => y[this.valueField] === x)) :
          this.data.find(x => x[this.valueField] === this.value);
        this.selectChange.emit(result);
      } else {
        this.selectChange.emit(this.value);
      }
    }
  }
}
