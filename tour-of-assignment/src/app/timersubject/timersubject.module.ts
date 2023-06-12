import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimersubjectRoutingModule } from './timersubject-routing.module';
import { TimersubjectComponent } from './timersubject.component';
import { CountdownComponent } from './countdown/countdown.component';
import { TimerinputComponent } from './timerinput/timerinput.component';

import { FormsModule } from '@angular/forms';
import { TimelogComponent } from './timelog/timelog.component';
import { ClickcountComponent } from './clickcount/clickcount.component';


@NgModule({
  declarations: [
    TimersubjectComponent,
    CountdownComponent,
    TimerinputComponent,
    TimelogComponent,
    ClickcountComponent
  ],
  imports: [
    CommonModule,
    TimersubjectRoutingModule,
    FormsModule

  ]
})
export class TimersubjectModule { }
