import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLogin} from './admin-login';

describe('AdminLoginComponent', () => {
  let component: AdminLogin;
  let fixture: ComponentFixture<AdminLogin>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLogin ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
