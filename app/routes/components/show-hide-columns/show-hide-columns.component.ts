import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { TOOLTIP } from 'src/app/utils';

@Component({
  selector: 'app-show-hide-columns',
  templateUrl: './show-hide-columns.component.html',
  styleUrls: ['./show-hide-columns.component.scss'],
})
export class ShowHideColumnsComponent implements OnInit {
  @Input() tableId: any = 0;
  @Input() data: any = [];
  @Input() textHover: string = 'Ẩn/hiện cột';
  TOOLTIP = TOOLTIP;
  @Output() selectChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  changeVisible(value: boolean) {
    if (!value) {
      this.selectChange.emit(this.data);
    }
  }

}
