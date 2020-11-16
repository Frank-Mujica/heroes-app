import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesService } from './services/heroes.service';
import { HeroesModule } from './components/heroes/heroes.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HeroesModule,
    RouterModule.forRoot([])
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
