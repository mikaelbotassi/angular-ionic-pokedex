import { TestBed } from '@angular/core/testing';
import { FavoriteService } from './favorite.service';

describe('FavoriteService', () => {
  let service: FavoriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new FavoriteService;
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  afterAll(() => {
    localStorage.clear();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a favorite', () => {
    const pokemonId = 1;

    service.toggleFavorite(pokemonId);

    service.favorites$.subscribe((favorites) => {
      expect(favorites).toEqual([pokemonId]);
    });

    expect(service.isFavorite(pokemonId)).toBeTrue();
  });

  it('should remove a favorite', () => {
    const pokemonId = 1;

    service.toggleFavorite(pokemonId);

    expect(service.isFavorite(pokemonId)).toBeTrue();

    service.toggleFavorite(pokemonId);

    service.favorites$.subscribe((favorites) => {
      expect(favorites).toEqual([]);
    });

    expect(service.isFavorite(pokemonId)).toBeFalse();
  });

});
