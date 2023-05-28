import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicdivComponent } from './dynamicdiv.component';

const routes: Routes = [{ path: '', component: DynamicdivComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicdivRoutingModule { }
