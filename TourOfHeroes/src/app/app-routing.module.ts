import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashComponent } from './dash/dash.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dash',
    component:  DashComponent

  },
  { 
    path: 'detail/:id', 
    component: HeroDetailComponent },
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
