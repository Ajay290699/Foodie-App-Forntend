import { TestBed } from '@angular/core/testing';

import { RestaurantOwnerGuardGuard } from './restaurant-owner-guard.guard';

describe('RestaurantOwnerGuardGuard', () => {
  let guard: RestaurantOwnerGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RestaurantOwnerGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
