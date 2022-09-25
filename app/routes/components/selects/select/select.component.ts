import {ControlValueAccessor, NgControl} from '@angular/forms';
import {Component, EventEmitter, Input, OnInit, Optional, Output, Self} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {TEXT_NO_RESULTS} from "../../../../utils";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less'],
})

export class SelectComponent implements ControlValueAccessor, OnInit {
  @Input() labelContent: string;
  @Input() getObjectValue = false;
  @Input() errorTip: string;
  @Input() placeHolder: string;
  @Input() disabled = false;
  @Input() required = false;
  @Input() data: any[];
  @Input() valueField = 'id';
  @Input() labelField = 'name';
  @Input() customLabelField = '';
  @Input() openSearchModal = true;
  @Input() name = 'select';
  @Input() span = 16;
  @Input() labelHorizontal = true;
  @Input() hideLabel = false;
  @Input() nzMode = 'default';
  @Input() nzSize = 'large';
  @Input() isCreateReport = false;
  @Input()  statusError: string;
  @Input() isOpenCreateModal = false;
  @Input() staticLabelField = true;
  @Input() isVisibilityLabel = false;
  @Input() isCustomLabel = false;
  @Output() clickSearch = new EventEmitter<string>();
  @Output() clickOpenSearch = new EventEmitter();
  @Output() clickClear = new EventEmitter();
  @Output() selectChange = new EventEmitter<any>();
  @Input() isShowClear: any =true;
  @Input() isShowError = true;
  @Input() valueFieldId = true;

  spanLabel = 24 - this.span;
  value: any;
  notFoundContent = TEXT_NO_RESULTS;
  @Input() maxSelectDisplay: any = 2;
  @Input() isSearch: any = true;


  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private translateService: TranslateService,
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
    if (!this.errorTip && this.isShowError) {
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

  handleSearch(value) {
    this.clickSearch.emit(value);
  }

  handleOpenSearch() {
    this.clickOpenSearch.emit();
  }

  handleSelectChange() {
    if (this.value == null) {
      this.clickClear.emit()
    }
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
