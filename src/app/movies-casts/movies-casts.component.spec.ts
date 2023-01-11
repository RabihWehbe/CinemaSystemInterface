import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesCastsComponent } from './movies-casts.component';

describe('MoviesCastsComponent', () => {
  let component: MoviesCastsComponent;
  let fixture: ComponentFixture<MoviesCastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesCastsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesCastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
