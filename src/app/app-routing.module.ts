import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesComponent } from './sales/sales.component';
import { UsersComponent } from './users/users.component';
import { BarbersComponent } from './barbers/barbers.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { AuditsComponent } from './audits/audits.component';
import { ServicesComponent } from './services/services.component';
import { PosComponent } from './pos/pos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'sales',
    component: SalesComponent
  },
  // {
  //   path: 'pos',
  //   component: PosComponent
  // },
  {
    path: 'barbers',
    component: BarbersComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'schedules',
    component: SchedulesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'audits',
    component: AuditsComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
