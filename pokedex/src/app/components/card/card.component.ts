import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    standalone: true,
    imports: [IonicModule]
})
export class CardComponent  implements OnInit {

  @Input() public pokemon : Pokemon = new Pokemon;

  constructor() { }

  ngOnInit() {}

}
