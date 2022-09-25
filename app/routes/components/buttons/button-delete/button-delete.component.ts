import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button-delete',
  templateUrl: './button-delete.component.html',
  styleUrls: ['./button-delete.component.less'],
})
export class ButtonDeleteComponent implements OnInit {
  @Input() text = '';
  @Input() buttonType = 'primary';
  @Input() buttonSize = 'large';
  @Input() disabled = false;
  @Input() isCustomPadding = false;
  @Input() isIcon = true;
  @Output() clickDelete = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onClickDelete() {
    this.clickDelete.emit();
  }
}
