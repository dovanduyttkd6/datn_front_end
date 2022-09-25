import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-create',
  templateUrl: './button-create.component.html',
  styleUrls: ['./button-create.component.less']
})
export class ButtonCreateComponent implements OnInit {
  @Input() text: string = null;
  @Input() buttonType = "default";
  @Input() buttonSize = "large";
  @Output() clickCreate = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openCreate() {
    this.clickCreate.emit();
  }
}
