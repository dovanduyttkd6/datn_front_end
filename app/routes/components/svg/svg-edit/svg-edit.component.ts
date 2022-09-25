import { Component, Input, OnInit } from '@angular/core';
import { TOOLTIP } from "../../../../utils";

@Component({
  selector: 'app-svg-edit',
  templateUrl: './svg-edit.component.html',
  styleUrls: ['./svg-edit.component.less']
})
export class SvgEditComponent implements OnInit {
 @Input() tooltipTitle = ''
  TOOLTIP = TOOLTIP;

  constructor() { }

  ngOnInit() {
  }

}
