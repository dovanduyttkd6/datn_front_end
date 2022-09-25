import {Directive, Input,} from '@angular/core';

@Directive({
  selector: '[no-space]',
  host: {
    '(keydown)': 'onKeyUp($event)'
  }
})
export class NoSpaceDirective {
  @Input('no-space') noSpace;

  onKeyUp($event) {
    if (this.noSpace && this.noSpace === true && $event.keyCode === 32) {
      $event.preventDefault();
    }
  }
}
