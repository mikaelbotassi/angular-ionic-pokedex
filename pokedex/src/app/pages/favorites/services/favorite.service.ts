import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private _favorites = new BehaviorSubject<number[]>([]);

  constructor() {
    this.loadFavorites();
  }

  get favorites$(): Observable<number[]> {
    return this._favorites.asObservable();
  }

  set favorites(value:number[]){
    this._favorites.next(value);
  }

  isFavorite(pokemonId: number): boolean {
    const favorites = this._favorites.value;
    return favorites.includes(pokemonId);
  }

  toggleFavorite(pokemonId: number): void {
    const favorites = this._favorites.value;
    if (this.isFavorite(pokemonId)) {
      this.favorites = favorites.filter(id => id !== pokemonId);
    } else {
      favorites.push(pokemonId);
      this.favorites = favorites
    }
    this.saveFavorites();
  }

  private saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(this._favorites.value));
  }

  private loadFavorites() {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      this.favorites = JSON.parse(savedFavorites);
    }
  }

}
