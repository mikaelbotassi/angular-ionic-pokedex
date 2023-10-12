import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Pokemon } from 'src/app/models/pokemon';
import { HttpService } from 'src/app/services/http.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-pokemon-detail-card',
  templateUrl: './pokemon-detail-card.component.html',
  styleUrls: ['./pokemon-detail-card.component.scss'],
})
export class PokemonDetailCardComponent  implements OnInit {

  pokemon:Pokemon = new Pokemon;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http:HttpService,
    private navCtrl: NavController,
    private toastr:NotificationService
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.getPokemon(`https://pokeapi.co/api/v2/pokemon/${id}/`).subscribe({
      next:(resp) => {
        this.pokemon = Pokemon.fromPokeApi(resp);
      },
      error:(err) => {
        this.toastr.showError("Unable to view details of this pokemon")
        throw new Error(err)
      }
    })
  }

}
