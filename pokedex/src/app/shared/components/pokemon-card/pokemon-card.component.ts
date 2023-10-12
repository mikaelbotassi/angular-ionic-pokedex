import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { FavoriteService } from 'src/app/pages/favorites/services/favorite.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent  implements OnInit {

  @Input() public pokemon : Pokemon = new Pokemon;
  isFavorite:boolean = false;

  constructor(
    private favoriteService:FavoriteService,
    private toastr:NotificationService
  ) { }

  ngOnInit() {
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
