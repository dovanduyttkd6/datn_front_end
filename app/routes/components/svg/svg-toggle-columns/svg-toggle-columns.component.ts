import { Component, OnInit } from '@angular/core';
import {TOOLTIP} from "../../../../utils";

@Component({
  selector: 'app-svg-toggle-columns',
  templateUrl: './svg-toggle-columns.component.html',
  styleUrls: ['./svg-toggle-columns.component.less']
})
export class SvgToggleColumnsComponent implements OnInit {

  TOOLTIP = TOOLTIP;

  constructor() { }

  ngOnInit() {
  }

}
