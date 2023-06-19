import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = 
[{ path: 'banner', 
loadChildren: () => import('./banner/banner.module').then(m => m.BannerModule) 
},
{ path: 'ecommerce',
 loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule)
},

{ path: 'tabledata', loadChildren: () => import('./tabledata/tabledata.module').then(m => m.TabledataModule) },

{ path: 'dynamicdiv', loadChildren: () => import('./dynamicdiv/dynamicdiv.module').then(m => m.DynamicdivModule) },


{ path: 'timer', loadChildren: () => import('./timer/timer.module').then(m => m.TimerModule) },


{ path: 'timersubject', loadChildren: () => import('./timersubject/timersubject.module').then(m => m.TimersubjectModule) },
{
  path: '',
  redirectTo: '/banner',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
