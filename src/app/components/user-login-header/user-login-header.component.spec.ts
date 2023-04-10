import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginHeaderComponent } from './user-login-header.component';

describe('UserLoginHeaderComponent', () => {
  let component: UserLoginHeaderComponent;
  let fixture: ComponentFixture<UserLoginHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoginHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLoginHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
