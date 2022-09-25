import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  @Input() tabs: any[];
  @Input() selectedTabIndex;
  @Input() isVertical = false;
  @Output() selectedTabChange = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  selectChangeTab(item) {
    this.selectedTabChange.emit(item);
  }

}
