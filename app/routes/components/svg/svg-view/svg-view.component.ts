import { Component, Input, OnInit } from '@angular/core';
import { TOOLTIP } from 'src/app/utils';

@Component({
  selector: 'app-svg-view',
  templateUrl: './svg-view.component.html',
  styleUrls: ['./svg-view.component.less']
})
export class SvgViewComponent implements OnInit {
  @Input() tooltipTitle = ''
  TOOLTIP = TOOLTIP;

  constructor() { }

  ngOnInit() {
  }

}
