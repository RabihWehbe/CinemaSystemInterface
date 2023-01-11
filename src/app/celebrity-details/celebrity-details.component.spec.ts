import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrityDetailsComponent } from './celebrity-details.component';

describe('CelebrityDetailsComponent', () => {
  let component: CelebrityDetailsComponent;
  let fixture: ComponentFixture<CelebrityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelebrityDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelebrityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
