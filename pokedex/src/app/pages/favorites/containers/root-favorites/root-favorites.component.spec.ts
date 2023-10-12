import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RootFavoritesComponent } from './root-favorites.component';
import { RouterModule } from '@angular/router';

describe('RootFavoritesComponent', () => {
  let component: RootFavoritesComponent;
  let fixture: ComponentFixture<RootFavoritesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RootFavoritesComponent ],
      imports: [IonicModule.forRoot(), RouterModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RootFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
