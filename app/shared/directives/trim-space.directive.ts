import {Directive, ElementRef, Input,} from '@angular/core';
import {NgControl} from "@angular/forms";

@Directive({
  selector: '[no-space]',
  host: {
    '(blur)': 'onKeyUp($event)'
  }
})
export class TrimSpaceDirective {
  @Input('trim-space') trimSpace;
  constructor(private _el: ElementRef,private ngControl: NgControl) { }
  onKeyUp(event) {

    // if (this.trimSpace && this.trimSpace === true) {
      const initalValue = this._el.nativeElement.value;
      this._el.nativeElement.value = initalValue.trim();
      if ( initalValue !== this._el.nativeElement.value) {
        this.ngControl.control.patchValue(this._el.nativeElement.value)
        event.stopPropagation();
      }
    // }
  }
}
