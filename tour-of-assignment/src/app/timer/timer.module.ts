import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerRoutingModule } from './timer-routing.module';
import { TimerComponent } from './timer.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { TimerControllerComponent } from './timer-controller/timer-controller.component';
import { TimerLoggerComponent } from './timer-logger/timer-logger.component';
import { ClickCounterComponent } from './click-counter/click-counter.component';


@NgModule({
  declarations: [
    TimerComponent,
    CountdownTimerComponent,
    TimerControllerComponent,
    TimerLoggerComponent,
    ClickCounterComponent
  ],
  imports: [
    CommonModule,
    TimerRoutingModule
  ]
})
export class TimerModule { }
