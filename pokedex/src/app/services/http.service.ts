import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public offset: number = 0;
  public limit: number = 5;

  constructor(
    private http: HttpClient
  ) { }

  getPokemons() : Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?offset=${this.offset}&limit=${this.limit}`)
  }

  getPokemon(url:string) : Observable<any> {
    return this.http.get(url)
  }

}
