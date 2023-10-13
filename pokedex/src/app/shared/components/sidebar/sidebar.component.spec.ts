import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { SidebarComponent } from './sidebar.component';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DebugElement } from '@angular/core';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let debugElement:DebugElement;
  let router:Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarComponent],
      imports: [IonicModule.forRoot(), RouterTestingModule],
    }).compileComponents();

    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render menu items', () => {
    const menuItems = debugElement.queryAll(By.css('ion-menu-toggle ion-item'));
    expect(menuItems.length).toBe(component.menuItems.length);
  });

  it('should render menu items with correct titles and icons', () => {
    const menuItems = debugElement.queryAll(By.css('ion-menu-toggle ion-item'));

    menuItems.forEach((item,i) => {
      expect(item.nativeElement.textContent).toContain(component.menuItems[i].title);
      const iconElement = item.query(By.css('ion-icon'));
      expect(iconElement.nativeElement.name).toContain(component.menuItems[i].icon);
    });
  });

  it('should have active-link class for the active route', fakeAsync(() => {
    const activeLink = debugElement.query(By.css('.active-link'));
    expect(activeLink).toBeNull(); // Inicialmente, não deve haver nenhum link ativo

    // Simule a navegação para a rota "Home"
    router.navigate(['/']);

    tick();

    fixture.detectChanges();

    const updatedActiveLink = debugElement.query(By.css('.active-link'));
    expect(updatedActiveLink).not.toBeNull(); // Deve haver um link ativo após a navegação
  }));
});
