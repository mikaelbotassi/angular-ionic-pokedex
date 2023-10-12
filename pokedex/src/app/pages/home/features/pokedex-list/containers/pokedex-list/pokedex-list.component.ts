import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Pokemon } from 'src/app/models/pokemon';
import { HttpService } from 'src/app/services/http.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss'],
})

export class PokedexListComponent  implements OnInit {

  pokemons: Pokemon[] = [];
  offset:number = 0;
  public search:string = "";

  constructor(
    private httpService : HttpService,
    private toastr: NotificationService
  ) { }

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons(){
    this.httpService.getPokemons().subscribe({
      next:(resp) => {
        resp.results.forEach((data:any) => this.getPokemonDetail(data.url))
      },
      error:(err) => {
        this.toastr.showError("It looks like there was some error while fetching the data, please try again later.");
        throw new Error(err);
      }
    })

    this.offset = this.httpService.offset;

  }

  getPokemonDetail(url: string): any {
    this.httpService.getPokemon(url).subscribe({
      next:(resp) => {
        this.pokemons.push(Pokemon.fromPokeApi(resp))
      },
      error:(err) => {
        this.toastr.showError("It looks like there was some error while fetching the data, please try again later.");
        throw new Error(err);
      }
    })
  }

  nextPage() {
    this.httpService.offset += this.httpService.limit;
    this.loadPokemons();
  }


}
