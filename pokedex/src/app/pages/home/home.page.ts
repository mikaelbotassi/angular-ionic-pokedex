import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { CardComponent } from '../../components/card/card.component';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
    standalone: true,
    imports: [IonicModule, CardComponent],
})
export class HomePage implements OnInit {

  private pokemons : any[] = [];

  constructor(private httpService : HttpService) { }

  ngOnInit() {
    this.httpService.getPokemons().subscribe((data:any) => {
      this.pokemons = data.results;
    })
  }

}
