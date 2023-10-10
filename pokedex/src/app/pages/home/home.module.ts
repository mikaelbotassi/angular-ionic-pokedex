import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RootHomeComponent } from './containers/root-home/root-home.component';
import { RouterModule, Routes } from '@angular/router';
import { PokedexListComponent } from './features/pokedex-list/containers/pokedex-list/pokedex-list.component';
import { FeatureModule } from './features/feature.module';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: RootHomeComponent,
    children: [
      {path: '', component: PokedexListComponent}
    ]
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forRoot(routes),
        FeatureModule,
        SharedModule
    ],
    declarations:[
      RootHomeComponent
    ]
})
export class HomePageModule {}
