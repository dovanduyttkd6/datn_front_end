import { Component, OnInit, Input } from '@angular/core';
type FontStyle = 'italic' | 'normal' | 'oblique' | 'initial';
type FontWeight = 'normal' | 'bold' | 'bolder' | 'lighter' | 'initial' | 'inherit' | number;
@Component({
  selector: 'app-label-kibana',
  templateUrl: './label-kibana.component.html',
  styleUrls: ['./label-kibana.component.less']
})

export class LabelKibanaComponent implements OnInit {
  @Input() fontStyle: FontStyle = 'italic';
  @Input() fontSize = '13px';
  @Input() fontWeight: FontWeight = 'normal';
  @Input() color = 'rgba(0, 0, 0, 0.60)';
  @Input() noColon = false;

  constructor() { }

  ngOnInit() {
  }

}
