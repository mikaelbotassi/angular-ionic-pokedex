import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';
import { HttpService } from 'src/app/services/http.service';
import { Pokemon } from 'src/app/models/pokemon';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss'],
})
export class FavoriteListComponent  implements OnInit {

  search:string = "";
  pokemons:Pokemon[] = [];

  constructor(
    private favoriteService:FavoriteService,
    private http:HttpService,
    private toastr:NotificationService
  ) { }

  ngOnInit() {
    this.favoriteService.favorites$.subscribe({
      next: (favorites:number[]) => {
        this.pokemons = [];
        favorites.forEach((id) => {
          this.http.getPokemon(`https://pokeapi.co/api/v2/pokemon/${id}/`).subscribe({
            next:(resp) => {
              this.pokemons.push(Pokemon.fromPokeApi(resp));
            },
            error:(err) => {
              this.toastr.showError("Unable to load the pokemons you favorited")
              throw new Error(err)
            }
          });
        });
      }
    })
  }

}
