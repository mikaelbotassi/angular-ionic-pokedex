import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { PokedexListComponent } from './pokedex-list.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Pokemon, mockPokemon, mockPokemonData } from 'src/app/models/pokemon';
import { HttpService } from 'src/app/services/http.service';
import { PipeModule } from 'src/app/pipes/pipe.module';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';

describe('PokedexListComponent', () => {
  let component: PokedexListComponent;
  let fixture: ComponentFixture<PokedexListComponent>;
  let debugElement: DebugElement;
  let httpTestingController: HttpTestingController;
  let httpService: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokedexListComponent],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, PipeModule, FormsModule, SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PokedexListComponent);
    httpTestingController = TestBed.inject(HttpTestingController);
    httpService = TestBed.inject(HttpService);
    component = fixture.componentInstance;

    fixture.detectChanges();

    debugElement = fixture.debugElement;


  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a title', () => {
    const title = debugElement.query(By.css('ion-title'));
    expect(title).not.toBeNull();
  });

  it('should display a search bar', () => {
    const searchbar = debugElement.query(By.css('ion-searchbar'));
    expect(searchbar).not.toBeNull();
  });

  it('should render a list of Pokemon cards', () => {

    const pokemonCards = debugElement.queryAll(By.css('app-pokemon-card'));
    expect(pokemonCards.length).toBe(component.pokemons.length);

  });

  it('should display the "next" button', () => {
    const nextPageButton = debugElement.query(By.css('ion-button[color="success"]'));
    expect(nextPageButton).not.toBeNull();
  });

  it('should load Pokemon data', fakeAsync(() => {
    const mockResponse = {
      results: [
        { url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        { url: 'https://pokeapi.co/api/v2/pokemon/2/' },
      ],
    };

    spyOn(httpService, 'getPokemons').and.returnValue(of(mockResponse));
    spyOn(httpService, 'getPokemon').and.returnValue(of(mockPokemonData));

    component.loadPokemons();

    tick(); // Simulate the passage of time

    // Now, you can add expectations based on your component's behavior
    expect(component.pokemons.length).toBe(2);

    // Use expect() and other matchers to check if the component behaves as expected
  }));

});
