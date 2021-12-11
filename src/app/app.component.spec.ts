import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { FeatherModule } from 'angular-feather';
import { Instagram, Linkedin, Mail } from 'angular-feather/icons';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FeatherModule.pick({ Instagram, Mail, Linkedin }),
      ],
      declarations: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should Dairis name', () => {
    const element = fixture.debugElement.query(By.css('.name'));
    expect(element.nativeElement.textContent).toBe('Dairis Zambrano');
  });

  it(`should Dairis has role`, () => {
    const element = fixture.debugElement.query(By.css('.role'));
    expect(element.nativeElement.textContent).toBe('Trabajadora Social');
  });

  it('should Dairis has foto', () => {
    const element = fixture.debugElement.query(By.css('.photo'));
    expect(element).not.toBeNull();
  });

  it('Should have 3 skills', () => {
    const element = fixture.debugElement.query(By.css('.skills'));
    expect(element.childNodes.length).toBe(3);
  });
});
