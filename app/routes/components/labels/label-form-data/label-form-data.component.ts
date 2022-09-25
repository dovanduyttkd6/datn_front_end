import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-label-form-data',
  templateUrl: './label-form-data.component.html',
  styleUrls: ['./label-form-data.component.less']
})
export class LabelFormDataComponent implements OnInit {
  @Input() required = false;
  @Input() noColon = false;
  @Input() for: string;
  @Input() span = "8";
  @Input() classLabel: string;
  @Input() label: string;
  @Input() content: any;
  @Input() isFilterList = false;
  @Input() isVisibilityLabel = false;

  constructor() { }

  ngOnInit() {
  }

}
