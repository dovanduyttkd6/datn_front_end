import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'layout-pro-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutProFooterComponent {
  dateObj = new Date();

  constructor() {
  }

  get year() {
    return this.dateObj.getUTCFullYear()
  }
}
