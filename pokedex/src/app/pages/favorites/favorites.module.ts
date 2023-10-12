import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RootFavoritesComponent } from './containers/root-favorites/root-favorites.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteListComponent } from './containers/favorite-list/favorite-list.component';
import { PipeModule } from 'src/app/pipes/pipe.module';
import { FavoriteService } from './services/favorite.service';

const routes: Routes = [
  {
    path: '',
    component: RootFavoritesComponent,
    children: [
      {path: '', component: FavoriteListComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes),
    PipeModule
  ],
  declarations: [
    RootFavoritesComponent,
    FavoriteListComponent
  ],
})
export class FavoritesPageModule {}
