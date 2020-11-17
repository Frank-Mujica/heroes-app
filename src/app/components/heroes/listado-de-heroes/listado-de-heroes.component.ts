import { Component, OnInit, ViewChild } from '@angular/core';
import { Heroe } from '../../../classes/heroe';
import { HeroesService } from '../../../services/heroes.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { heroeAction } from '../hero.actions';
import { Appstate } from '../../../app.reducer';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-listado-de-heroes',
  templateUrl: './listado-de-heroes.component.html',
  styleUrls: ['./listado-de-heroes.component.css']
})
export class ListadoDeHeroesComponent implements OnInit {

  public title = 'Tutorial de Angular - Héroes de Marvel';
  public searchString;
  @ViewChild('spi') spinner;
  page: number = 0;
  public recoveryHero: any;
  form: FormGroup;


  constructor(public heroesService: HeroesService, private router:Router, private store: Store<Appstate>, private fb: FormBuilder) {
    this.createForm();
   }

  createForm(){
    this.form = this.fb.group({
      nombre: ['', []],
    });
  }

  submitSearch() {    
  this.heroesService.resetPager();   
    this.store.dispatch(heroeAction({texto:this.form.value.nombre}));
    this.heroesService.getHeroes(this.recoveryHero);
  }

  recoverHero(){
    this.store.subscribe(data=> {
      console.log('recovery',data.heroe[1]);
      
      this.recoveryHero = data.heroe[1];
      
    })
  }

  prevPage() {
    this.page--    
    this.heroesService.getHeroes(this.form.value.nombre, this.page);
  }

  nextPage() {
    this.page++    
    this.heroesService.getHeroes(this.form.value.nombre, this.page);
  }

  go_to(id){
    this.router.navigateByUrl('/heroe/'+id);
  }

  ngOnInit() {
    this.recoverHero();
    this.heroesService.getHeroes(this.recoveryHero);



  }

}
