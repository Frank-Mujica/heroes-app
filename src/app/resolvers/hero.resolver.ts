import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Heroe } from "../classes/heroe";
import { HeroesService } from '../services/heroes.service';

@Injectable({
  providedIn: "root",
})
export class HeroResolver implements Resolve<Observable<Heroe>> {

  constructor(private _heroService: HeroesService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this._heroService.getHeroe(route.paramMap.get('id'));
  }
}
