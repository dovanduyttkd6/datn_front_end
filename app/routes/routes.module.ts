import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { RouteRoutingModule } from './routes-routing.module';
// passport pages
// single pages
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';

const COMPONENTS = [];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    RouteRoutingModule,
    DragDropModule,
    ScrollingModule,
  ],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
  exports: [],
})
export class RoutesModule {
}
