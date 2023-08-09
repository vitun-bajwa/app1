import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  {
    path: '**',component:EmptyRouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    // useHash: true,
  })],
  exports: [RouterModule],
  providers:[
    { provide: APP_BASE_HREF, useValue: '/app1/' },
    // {provide:'USE_FAKE', useValue: true },
  ]
})
export class AppRoutingModule { }
