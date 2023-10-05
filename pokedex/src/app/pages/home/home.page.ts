import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { CardComponent } from '../../components/card/card.component';
import { IonicModule } from '@ionic/angular';
import { Pokemon } from 'src/app/models/pokemon';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
    standalone: true,
    imports: [IonicModule, CardComponent, CommonModule],
})
export class HomePage implements OnInit {

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
