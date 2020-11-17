import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { ListadoDeHeroesComponent } from './listado-de-heroes/listado-de-heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CapitalizePipe } from 'src/app/pipes/capitalize.pipe';
import { RouterModule } from '@angular/router';
import { BoldPipe } from 'src/app/pipes/bold.pipe';

@NgModule({
  declarations: [
    HeroProfileComponent,
    ListadoDeHeroesComponent,
    CapitalizePipe,
    BoldPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HeroesRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
