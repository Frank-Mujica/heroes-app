import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Heroe } from '../../../classes/heroe';
import { HeroesService } from '../../../services/heroes.service';
import { Location } from '@angular/common';
import { ModalPollComponent } from '../../../shared/modal-poll/modal-poll.component';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.css']
})
export class HeroProfileComponent implements OnInit {
  @ViewChild('modal') modal;
  private id;
  public heroe: any;
  public heroResolve: any;
  public question_modal: string;
  public team:string = "";
  public heroName: string;

  constructor(private route: ActivatedRoute, public heroesService: HeroesService, private _location: Location) {
    this.heroe = this.route.snapshot.data.hero.data.results[0];
    this.heroName = this.heroe.name
    this.team = this.heroe.teamColor;
    console.log(this.heroe);
  }

  ngOnInit() {

  }

  goBack() {
    this._location.back();
  }

  getTeam(team):void{
    console.log("Color: "+team);
    this.team = team;
    this.heroesService.teams.set(this.heroe.id, this.team);
  }

  launchModal():void{
    //this.question_modal="¿Dónde ubicarías a tu súper héroe?";
    this.question_modal="¿En cual grupo quieres colocar a tu súper héroe?";
    this.modal.toggle_modal();
  }

}
