import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, LoginPage], // ✅ Included ReactiveFormsModule
      providers: [
        {
          provide: Router,
          useValue: jasmine.createSpyObj('Router', ['navigate']),
        },
      ],
    }).compileComponents(); // ✅ Added compileComponents()

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to home after login', () => {
    component.form.setValue({ email: 'test@example.com', password: 'password123' }); // ✅ Ensure form is valid
    component.login();
    expect(router.navigate).toHaveBeenCalledOnceWith(['home']);
  });

  it('should navigate to register', () => {
    component.register();
    expect(router.navigate).toHaveBeenCalledOnceWith(['register']);
  });

  it('should create form on init', () => {
    expect(component.form).not.toBeUndefined();
    expect(component.form.controls['email']).toBeDefined();
    expect(component.form.controls['password']).toBeDefined();
  });

  it('should not navigate if form is invalid', () => {
    component.form.setValue({ email: '', password: '' }); // Invalid form
    component.login();
    expect(router.navigate).not.toHaveBeenCalled();
  });
});
