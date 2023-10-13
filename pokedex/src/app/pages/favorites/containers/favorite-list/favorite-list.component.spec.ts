import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FavoriteListComponent } from './favorite-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FavoriteService } from '../../services/favorite.service';
import { PipeModule } from 'src/app/pipes/pipe.module';
import { FormsModule } from '@angular/forms';

describe('FavoriteListComponent', () => {
  let component: FavoriteListComponent;
  let fixture: ComponentFixture<FavoriteListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteListComponent ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, PipeModule, FormsModule],
      providers:[FavoriteService]
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
