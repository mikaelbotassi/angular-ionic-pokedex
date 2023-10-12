import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { RouterModule, Routes } from '@angular/router';
import { RootPokemonDetailComponent } from './containers/root-pokemon-detail/root-pokemon-detail.component';
import { PokemonDetailCardComponent } from './components/pokemon-detail-card/pokemon-detail-card.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: RootPokemonDetailComponent,
    children: [
      {path: '', component: PokemonDetailCardComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PokemonDetailCardComponent,
    RootPokemonDetailComponent
  ]
})
export class PokemonDetailPageModule {}
