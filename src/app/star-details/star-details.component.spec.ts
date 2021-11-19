import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarDetailsComponent } from './star-details.component';

describe('StarDetailsComponent', () => {
  let component: StarDetailsComponent;
  let fixture: ComponentFixture<StarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
