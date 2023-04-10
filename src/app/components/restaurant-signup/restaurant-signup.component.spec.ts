import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSignupComponent } from './restaurant-signup.component';

describe('RestaurantSignupComponent', () => {
  let component: RestaurantSignupComponent;
  let fixture: ComponentFixture<RestaurantSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
