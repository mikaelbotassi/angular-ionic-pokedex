import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent  implements OnInit {

  menuItems = [
    {
      path:'/',
      title:'Home',
      icon:'home-outline'
    },
    {
      path:'/favorites',
      title:'Favorites',
      icon:'star-outline'
    },
  ]

  constructor() { }

  ngOnInit() {}

}
