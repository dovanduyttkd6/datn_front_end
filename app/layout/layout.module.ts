import { NgModule } from '@angular/core';
import { LayoutModule as CDKLayoutModule } from '@angular/cdk/layout';
import { SharedModule } from '@shared/shared.module';
import { PRO_ENTRYCOMPONENTS, PRO_COMPONENTS } from './pro/index';


@NgModule({
  imports: [SharedModule, CDKLayoutModule],
  entryComponents: PRO_ENTRYCOMPONENTS,
  declarations: [...PRO_COMPONENTS],
  exports: [...PRO_COMPONENTS],
})
export class LayoutModule { }
