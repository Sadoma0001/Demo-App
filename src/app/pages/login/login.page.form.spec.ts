import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page.form';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LoginPage],
      providers: [
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to home on successful login', () => {
    component.loginForm.setValue({ email: 'test@example.com', password: 'password123' });
    component.login();
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });

  it('should not navigate if form is invalid', () => {
    component.loginForm.setValue({ email: '', password: '' });
    component.login();
    expect(router.navigate).not.toHaveBeenCalled();
  });
});
