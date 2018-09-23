import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from '../modules/login/login.component';
import { DashboardModule } from '../modules/dashboard/dashboard.module';
import { DashboardComponent } from '../modules/dashboard/components/dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    DashboardModule
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
