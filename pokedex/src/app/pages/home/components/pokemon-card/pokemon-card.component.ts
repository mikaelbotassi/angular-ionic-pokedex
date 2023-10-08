import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent  implements OnInit {

  @Input() public pokemon : Pokemon = new Pokemon;

  constructor() { }

  ngOnInit() {}

}
