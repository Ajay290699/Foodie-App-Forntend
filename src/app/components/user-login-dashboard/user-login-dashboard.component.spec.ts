import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginDashboardComponent } from './user-login-dashboard.component';

describe('UserLoginDashboardComponent', () => {
  let component: UserLoginDashboardComponent;
  let fixture: ComponentFixture<UserLoginDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoginDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLoginDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
