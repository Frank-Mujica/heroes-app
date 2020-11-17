import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesService } from './services/heroes.service';
import { HeroesModule } from './components/heroes/heroes.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
//Ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { heroeReducer } from './components/heroes/hero.reducer';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HeroesModule,
    RouterModule.forRoot([]),
    BrowserModule, StoreModule.forRoot({ heroe: heroeReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
