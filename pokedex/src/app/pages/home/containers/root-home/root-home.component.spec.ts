import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { RootHomeComponent } from './root-home.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('RootHomeComponent', () => {
  let component: RootHomeComponent;
  let fixture: ComponentFixture<RootHomeComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RootHomeComponent],
      imports: [IonicModule.forRoot(), RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RootHomeComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain app-header and ion-content elements', () => {
    const appHeader = debugElement.query(By.css('app-header'));
    const ionContent = debugElement.query(By.css('ion-content'));

    expect(appHeader).not.toBeNull();
    expect(ionContent).not.toBeNull();
  });

  it('should have a main-content element with an id', () => {
    const mainContent = debugElement.query(By.css('#main-content'));

    expect(mainContent).not.toBeNull();
  });
});
