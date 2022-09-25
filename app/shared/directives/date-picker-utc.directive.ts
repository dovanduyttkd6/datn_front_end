import { Directive, HostBinding, HostListener, ElementRef, Input } from '@angular/core';
import { DATE_UTC_FORMAT } from '../../utils';
import { DatePipe } from '@angular/common';
@Directive({
  selector: '[appDatePickerUtc]',
})
export class DatePickerUtcDirective {
  @Input() ngModel: string;
  constructor(private el: ElementRef) {}
  @HostListener('change')
  onChange() {
    const datePipe = new DatePipe('en-US');
    (this.el.nativeElement as HTMLInputElement).value = datePipe.transform(
      (this.el.nativeElement as HTMLInputElement).value,
      DATE_UTC_FORMAT,
    );
  }
}
