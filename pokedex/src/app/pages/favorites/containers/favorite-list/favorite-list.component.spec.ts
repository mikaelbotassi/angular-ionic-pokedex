import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FavoriteListComponent } from './favorite-list.component';
import { DebugElement } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { FavoriteService } from '../../services/favorite.service';
import { HttpService } from 'src/app/services/http.service';
import { NotificationService } from 'src/app/services/notification.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PipeModule } from 'src/app/pipes/pipe.module';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('FavoriteListComponent', () => {
  let component: FavoriteListComponent;
  let fixture: ComponentFixture<FavoriteListComponent>;
  let debugElement: DebugElement;
  let favoriteService: FavoriteService;
  let httpService: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteListComponent],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, PipeModule, FormsModule],
      providers: [
        FavoriteService,
        HttpService,
        NotificationService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriteListComponent);
    component = fixture.componentInstance;
    httpService = TestBed.inject(HttpService);

    favoriteService = new FavoriteService;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  })

  afterAll(() => {
    localStorage.clear();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a title', () => {
    const title = debugElement.query(By.css('.display-4'));
    expect(title).not.toBeNull();
    expect(title.nativeElement.textContent).toContain('Favorites');
  });

  it('should have a search bar', () => {
    const searchbar = debugElement.query(By.css('ion-searchbar'));
    expect(searchbar).not.toBeNull();
  });

});
