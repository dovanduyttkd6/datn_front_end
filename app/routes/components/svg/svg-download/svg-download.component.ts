import { Component, Input, OnInit } from '@angular/core';
import { TOOLTIP } from 'src/app/utils';

@Component({
  selector: 'app-svg-download',
  templateUrl: './svg-download.component.html',
  styleUrls: ['./svg-download.component.less']
})
export class SvgDownloadComponent implements OnInit {
  @Input() tooltipTitle = ''
  TOOLTIP = TOOLTIP;
  constructor() { }

  ngOnInit() {
  }

}
