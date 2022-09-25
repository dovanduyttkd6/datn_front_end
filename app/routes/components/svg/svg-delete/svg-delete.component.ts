import { Component, Input, OnInit } from '@angular/core';
import {TOOLTIP} from "../../../../utils";

@Component({
  selector: 'app-svg-delete',
  templateUrl: './svg-delete.component.html',
  styleUrls: ['./svg-delete.component.less']
})
export class SvgDeleteComponent implements OnInit {
  @Input() tooltipTitle = ''
  TOOLTIP = TOOLTIP;

  constructor() { }

  ngOnInit() {
  }

}
