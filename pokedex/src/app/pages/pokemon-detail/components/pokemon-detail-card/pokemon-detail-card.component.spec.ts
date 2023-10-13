import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PokemonDetailCardComponent } from './pokemon-detail-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpService } from 'src/app/services/http.service';

describe('PokemonDetailCardComponent', () => {
  let component: PokemonDetailCardComponent;
  let fixture: ComponentFixture<PokemonDetailCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDetailCardComponent ],
      imports: [IonicModule.forRoot(), RouterTestingModule, HttpClientTestingModule],
      providers:[HttpService]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
