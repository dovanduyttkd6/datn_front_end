import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-export',
  templateUrl: './button-export.component.html',
  styleUrls: ['./button-export.component.less']
})
export class ButtonExportComponent implements OnInit {
  @Input() text = null;
  @Input() buttonType = "default";
  @Input() buttonSize = "large";
  @Input() isMarginRight = true;
  @Output() clickExport = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openExport() {
    this.clickExport.emit();
  }
}
