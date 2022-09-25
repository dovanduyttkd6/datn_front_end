import { Component, OnInit } from '@angular/core';
import { TOOLTIP } from 'src/app/utils';

@Component({
  selector: 'app-svg-upload-file',
  templateUrl: './svg-upload-file.component.html',
  styleUrls: ['./svg-upload-file.component.less']
})
export class SvgUploadFileComponent implements OnInit {
  TOOLTIP = TOOLTIP;
  constructor() { }

  ngOnInit() {
  }

}
