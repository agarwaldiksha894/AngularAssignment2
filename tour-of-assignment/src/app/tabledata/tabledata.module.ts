import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabledataRoutingModule } from './tabledata-routing.module';
import { TabledataComponent } from './tabledata.component';


@NgModule({
  declarations: [
    TabledataComponent
  ],
  imports: [
    CommonModule,
    TabledataRoutingModule
  ]
})
export class TabledataModule { }
