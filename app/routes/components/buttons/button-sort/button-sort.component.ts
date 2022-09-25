import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-sort',
  templateUrl: './button-sort.component.html',
  styleUrls: ['./button-sort.component.less']
})
export class ButtonSortComponent implements OnInit {
  @Input() check !: boolean;
  constructor() { }

  ngOnInit() {
  }

}
