import { TestBed } from '@angular/core/testing';

import { StarDetailsGuard } from './star-details.guard';

describe('StarDetailsGuard', () => {
  let guard: StarDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StarDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
