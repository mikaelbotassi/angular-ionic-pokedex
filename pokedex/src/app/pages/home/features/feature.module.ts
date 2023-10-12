import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexListComponent } from './pokedex-list/containers/pokedex-list/pokedex-list.component';
import { PokemonCardComponent } from '../components/pokemon-card/pokemon-card.component';
import { IonicModule } from '@ionic/angular';
import { PipeModule } from 'src/app/pipes/pipe.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PokedexListComponent,
    PokemonCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipeModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    PokedexListComponent
  ]
})
export class FeatureModule { }
