import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    PokemonCardComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ],
  exports:[SidebarComponent, HeaderComponent, PokemonCardComponent]
})
export class SharedModule { }
