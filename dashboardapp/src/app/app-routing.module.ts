import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: 'Dashboard', component: DashboardComponent},
  {path: 'navbar', component: NavmenuComponent},
  { path: '',   redirectTo: '/Dashboard', pathMatch: 'full' },
  { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
