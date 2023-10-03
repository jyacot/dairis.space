import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { FeatherModule } from 'angular-feather';
import { Instagram, Linkedin, Mail } from 'angular-feather/icons';
import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';


describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FeatherModule.pick({ Instagram, Mail, Linkedin }),
        TranslateModule.forRoot(),
      ],
      declarations: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
