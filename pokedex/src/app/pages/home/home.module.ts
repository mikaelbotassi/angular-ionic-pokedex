import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RootHomeComponent } from './containers/root-home/root-home.component';
import { RouterModule, Routes } from '@angular/router';
import { PokedexListComponent } from './containers/pokedex-list/containers/pokedex-list/pokedex-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipeModule } from 'src/app/pipes/pipe.module';

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
        SharedModule,
        PipeModule
    ],
    declarations:[
      RootHomeComponent,
      PokedexListComponent
    ],
})
export class HomePageModule {}
