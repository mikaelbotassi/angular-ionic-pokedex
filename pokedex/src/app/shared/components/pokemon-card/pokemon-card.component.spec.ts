import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PokemonCardComponent } from './pokemon-card.component';
import { FavoriteService } from 'src/app/pages/favorites/services/favorite.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Pokemon, mockPokemon } from 'src/app/models/pokemon';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;
  let debugElement:DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonCardComponent ],
      imports: [IonicModule.forRoot()],
      providers:[NotificationService]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    component.pokemon = mockPokemon;
    fixture.detectChanges();
    debugElement = fixture.debugElement;

  }));

  it('should create the PokemonCard component', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle favorite status when the "toggleFavorite" method is called', fakeAsync(() => {

    const toggleFavorite = spyOn(component, 'toggleFavorite');

    toggleFavorite.and.callThrough();

    const isFavoriteBeforeToggle = component.isFavorite;

    const favoriteButton = debugElement.query(By.css('.favorite-button'));
    favoriteButton.nativeElement.click();

    expect(toggleFavorite).toHaveBeenCalled();
    tick();

    const isFavoriteAfterToggle = component.isFavorite;
    expect(isFavoriteBeforeToggle).not.toEqual(isFavoriteAfterToggle);

  }));

  it('should display the Pokemon card content correctly', () => {

    const cardTitle = debugElement.query(By.css('.name'));
    expect(cardTitle.nativeElement.textContent).toContain(component.pokemon.name);

    const cardNumber = debugElement.query(By.css('.number'));
    expect(cardNumber.nativeElement.textContent).toContain(`N° ${component.pokemon.number}`);

    const favoriteButton = debugElement.query(By.css('.favorite-button'));
    expect(favoriteButton).toBeTruthy();

    const image = debugElement.query(By.css('img'));
    expect(image).toBeTruthy();
    expect(image.nativeElement.alt).toEqual(component.pokemon.name);

    const routerLink = fixture.debugElement.query(By.css('ion-router-link'));
    expect(routerLink).toBeTruthy();
    expect(routerLink.nativeElement.routerLink).toEqual(`/pokemon/${component.pokemon.number}`);
  });
});
