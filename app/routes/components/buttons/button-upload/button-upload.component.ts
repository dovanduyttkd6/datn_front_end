import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button-upload',
  templateUrl: './button-upload.component.html',
  styleUrls: ['./button-upload.component.less']
})
export class ButtonUploadComponent implements OnInit {
  @Input() text: string = null;
  @Input() loading = false;
  @Input() buttonType = "primary";
  @Input() buttonSize = "large";
  @Input() disabled = false;
  @Output() clickUpload = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onClickUpload() {
    this.clickUpload.emit();
  }

}
