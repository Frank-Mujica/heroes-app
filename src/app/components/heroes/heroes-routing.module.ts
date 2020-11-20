import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeroResolver } from "src/app/resolvers/hero.resolver";
import { ModalPollComponent } from "src/app/shared/modal-poll/modal-poll.component";
import { HeroProfileComponent } from "./hero-profile/hero-profile.component";
import { ListadoDeHeroesComponent } from "./listado-de-heroes/listado-de-heroes.component";

const routes: Routes = [
  { path: "", redirectTo: "listado-heroes", pathMatch: "full" },
  { path: "listado-heroes", component: ListadoDeHeroesComponent },
  {
    path: "heroe/:id",
    component: HeroProfileComponent,
    resolve: { hero: HeroResolver },
  },
  { path: "modal-poll", component: ModalPollComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
