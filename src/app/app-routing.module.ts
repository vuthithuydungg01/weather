import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HourlyComponent } from './hourly/hourly.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MonthlyComponent } from './monthly/monthly.component';
import { SignupComponent } from './signup/signup.component';
import { TenDaysComponent } from './ten-days/ten-days.component';
import { Warning1Component } from './warning1/warning1.component';
import { Warning2Component } from './warning2/warning2.component';
import { WeekendComponent } from './weekend/weekend.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'hourly', component: HourlyComponent },
  { path: 'ten-days', component: TenDaysComponent },
  { path: 'weekend', component: WeekendComponent },
  { path: 'monthly', component: MonthlyComponent },
  { path: 'warning1', component: Warning1Component },
  { path: 'warning2', component: Warning2Component },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'test-lazy',
  loadChildren: () => import('./test-lazy/test-lazy.module').then(m => m.TestLazyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
