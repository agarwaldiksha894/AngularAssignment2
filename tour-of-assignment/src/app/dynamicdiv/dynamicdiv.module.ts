import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicdivRoutingModule } from './dynamicdiv-routing.module';
import { DynamicdivComponent } from './dynamicdiv.component';


@NgModule({
  declarations: [
    DynamicdivComponent
  ],
  imports: [
    CommonModule,
    DynamicdivRoutingModule
  ]
})
export class DynamicdivModule { }
