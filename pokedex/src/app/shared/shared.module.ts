import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ],
  exports:[SidebarComponent, HeaderComponent]
})
export class SharedModule { }
