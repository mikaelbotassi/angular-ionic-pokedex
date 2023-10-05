import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public offset: number = 0;
  public limit: number = 5;

  constructor(
    private http: HttpClient
  ) { }

  getPokemons() : Promise<any> {
    return new Promise((resolve, reject) => {

      this.http.get(`https://pokeapi.co/api/v2/pokemon?offset=${this.offset}&limit=${this.limit}`).subscribe({
        next: (resp) => resolve(resp),
        error: (error) => reject(error)
      })

    });
  }

  getPokemonDetail(url : string) : Promise<Pokemon> {

    return new Promise<Pokemon>((resolve, reject) => {
      this.http.get(url).subscribe({
          next: (resp) => {
            const pokemon = Pokemon.fromPokeApi(resp);
            resolve(pokemon)
          },
          error: (err) => reject(err)
      })
    })

  }

}
