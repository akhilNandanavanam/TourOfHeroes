import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashComponent } from './dash/dash.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dash',
    component:  DashComponent

  },
  {
    path: 'heroes',
    component : HeroesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
