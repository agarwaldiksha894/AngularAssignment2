import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimersubjectComponent } from './timersubject.component';

const routes: Routes = [{ path: '', component: TimersubjectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimersubjectRoutingModule { }
