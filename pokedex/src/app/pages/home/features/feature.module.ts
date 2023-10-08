import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexListComponent } from './pokedex-list/containers/pokedex-list/pokedex-list.component';
import { PokemonCardComponent } from '../components/pokemon-card/pokemon-card.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    PokedexListComponent,
    PokemonCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    PokedexListComponent
  ]
})
export class FeatureModule { }
