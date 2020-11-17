import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'component', component: AppComponent },
  { path: '', pathMatch: 'full', redirectTo: 'listado-heroes'},
  { path: '',  loadChildren: './components/heroes/heroes.module#HeroesModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

