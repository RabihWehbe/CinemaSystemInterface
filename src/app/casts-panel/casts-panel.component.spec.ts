import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastsPanelComponent } from './casts-panel.component';

describe('CastsPanelComponent', () => {
  let component: CastsPanelComponent;
  let fixture: ComponentFixture<CastsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastsPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CastsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
