import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Pipe({
  name: 'pokemonName'
})
export class PokemonNamePipe implements PipeTransform {

  transform(pokemons:any, name:string) {
    if(name==null || name == undefined || name == '') return pokemons;
    return pokemons.filter((pokemon:any) => pokemon.name.indexOf(name) !== -1);
  }


}
