import { Component, OnInit, ViewChild } from '@angular/core';
import { Heroe } from '../../../classes/heroe';
import { HeroesService } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-de-heroes',
  templateUrl: './listado-de-heroes.component.html',
  styleUrls: ['./listado-de-heroes.component.css']
})
export class ListadoDeHeroesComponent implements OnInit {

  public title = 'Tutorial de Angular - Héroes de Marvel';
  public searchString;
  // The child component : spinner
  @ViewChild('spi') spinner;
  page: number = 0;
  /* public heroes: Array<Heroe> = []; */

  constructor(public heroesService: HeroesService, private router:Router) { }

  submitSearch() {
    this.heroesService.resetPager();
    this.heroesService.getHeroes(this.searchString);
  }

  prevPage() {
    this.page--    
    this.heroesService.getHeroes(this.searchString, this.page);
  }

  nextPage() {
    this.page++    
    this.heroesService.getHeroes(this.searchString, this.page);
  }

  go_to(id){
    this.router.navigateByUrl('/heroe/'+id);
  }

  ngOnInit() {
    this.heroesService.getHeroes();



  }

}
