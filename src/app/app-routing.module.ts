import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { Admin } from './admin.component';
import { AuthGuard } from './auth.guard';

import { Dashboard } from './dashboard.component';
import { Kpi } from './kpi.component';
import { LoginForm } from './loginform.component';




const routes: Routes = [

   {path:'' ,redirectTo:'/login', pathMatch:'full'},
   {path:'login' ,component:LoginForm},
   {path:'admin' ,component:Admin,canActivate:[AuthGuard]},
  {path:'dashboard' ,component:Dashboard,canActivate:[AuthGuard]},
  {path:'kpi' ,component:Kpi,canActivate:[AuthGuard]},

]



@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }



export const routingcomponent=[Dashboard,Kpi,LoginForm,Admin];