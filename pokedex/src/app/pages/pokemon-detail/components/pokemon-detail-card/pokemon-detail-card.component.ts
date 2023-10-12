import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Pokemon } from 'src/app/models/pokemon';
import { FavoriteService } from 'src/app/pages/favorites/services/favorite.service';
import { HttpService } from 'src/app/services/http.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-pokemon-detail-card',
  templateUrl: './pokemon-detail-card.component.html',
  styleUrls: ['./pokemon-detail-card.component.scss'],
})
export class PokemonDetailCardComponent  implements OnInit {

  pokemon:Pokemon = new Pokemon;
  isFavorite:boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http:HttpService,
    private favoriteService: FavoriteService,
    private toastr:NotificationService
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.getPokemon(`https://pokeapi.co/api/v2/pokemon/${id}/`).subscribe({
      next:(resp) => {
        this.pokemon = Pokemon.fromPokeApi(resp);
        this.isFavorite = this.favoriteService.isFavorite(this.pokemon.number);
      },
      error:(err) => {
        this.toastr.showError("Unable to view details of this pokemon")
        throw new Error(err)
      }
    })

    this.favoriteService.favorites$.subscribe({
      next: (resp) => {
        this.isFavorite = this.favoriteService.isFavorite(this.pokemon.number);
      },
      error:(err) => {
        this.toastr.showError("Unable to check if the pokemon is still favorited")
        throw new Error(err);
      }
    })

  }

  toggleFavorite(){
    this.favoriteService.toggleFavorite(this.pokemon.number);
  }

}
