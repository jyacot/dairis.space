import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForosComponent } from './foros.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ForosComponent', () => {
  let component: ForosComponent;
  let fixture: ComponentFixture<ForosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForosComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ForosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
