import {Directive, ElementRef, HostListener, Input,} from '@angular/core';
import {NgControl} from "@angular/forms";

@Directive({
  selector: '[no-special-character]'
})
export class NoSpecialCharacterDirective {

  @Input('no-special-character') isSpecial;
  constructor(private _el: ElementRef,private ngControl: NgControl) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    if(this.isSpecial && this.isSpecial == true){
      const initalValue = this._el.nativeElement.value;
      this._el.nativeElement.value = initalValue.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D')
        .replace(/[^a-zA-Z0-9_]+$/, '');
    }
  }
}
