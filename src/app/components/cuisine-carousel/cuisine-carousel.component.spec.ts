import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisineCarouselComponent } from './cuisine-carousel.component';

describe('CuisineCarouselComponent', () => {
  let component: CuisineCarouselComponent;
  let fixture: ComponentFixture<CuisineCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuisineCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuisineCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
