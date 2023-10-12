import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the header component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a menu button in the header', () => {
    const menuButton = fixture.debugElement.queryAll(By.css('ion-menu-button'));
    expect(menuButton).toBeTruthy();
  });

  it('should have a centered title with an image', () => {
    const title = fixture.debugElement.query(By.css('ion-title'));
    expect(title).toBeTruthy();
    const image = title.nativeElement.querySelector('img');
    expect(image).toBeTruthy();
  });
});
