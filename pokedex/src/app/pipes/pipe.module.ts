import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonNamePipe } from './pokemon-name.pipe';



@NgModule({
  declarations: [PokemonNamePipe],
  imports: [],
  exports:[PokemonNamePipe]
})
export class PipeModule { }
