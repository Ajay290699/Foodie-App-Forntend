import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantHeaderComponent } from './restaurant-header.component';

describe('RestaurantHeaderComponent', () => {
  let component: RestaurantHeaderComponent;
  let fixture: ComponentFixture<RestaurantHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
