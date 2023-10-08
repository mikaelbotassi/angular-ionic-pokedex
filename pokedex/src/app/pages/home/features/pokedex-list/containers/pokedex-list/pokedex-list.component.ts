import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss'],
})
export class PokedexListComponent  implements OnInit {

  public pokemons : Pokemon[] = [];

  constructor(private httpService : HttpService) { }

  ngOnInit() {
    this.getPokemons();
  }

  async getPokemons() {
    try {
      const data: any = await this.httpService.getPokemons();
      for (const element of data.results) {
        try {
          const pokemonDetail = await this.getPokemonDetail(element.url);
          this.pokemons.push(pokemonDetail);
        } catch (e) {
          console.error("Error: ", e);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getPokemonDetail(url: string): Promise<any> {
    try {
      const resp: Pokemon = await this.httpService.getPokemonDetail(url);
      return resp;
    } catch (err:any) {
      throw new Error(err);
    }
  }

}
