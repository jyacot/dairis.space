import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainCardComponent } from './main-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



const TRANSLATION_EN = require('../../assets/i18n/en.json');
const TRANSLATION_ES = require('../../assets/i18n/es.json');



describe('MainCardComponent', () => {
  let fixture: ComponentFixture<MainCardComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FontAwesomeModule,
        TranslateTestingModule
          .withTranslations({
            en: TRANSLATION_EN,
            es: TRANSLATION_ES
          }).withDefaultLanguage('es'),
      ],
      declarations: [MainCardComponent],


    }).compileComponents();
    fixture = TestBed.createComponent(MainCardComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should Dairis name', () => {
    const element = fixture.debugElement.query(By.css('.name'));
    fixture.detectChanges();
    expect(element.nativeElement.textContent).toContain(TRANSLATION_ES.MAIN_NAME);
  });

  it(`should Dairis has role`, () => {
    const element = fixture.debugElement.query(By.css('.role'));
    fixture.detectChanges();
    expect(element.nativeElement.textContent).toContain(TRANSLATION_ES.ROLE);
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
