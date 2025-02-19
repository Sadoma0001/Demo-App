import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterPage } from './register.page';
import { Router } from '@angular/router';


describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;
  let router: Router;

  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RegisterPage],
        providers: [
          {
            provide: Router,
            useValue: jasmine.createSpyObj('Router', ['navigate']),
          },
        ],
      });
  
      fixture = TestBed.createComponent(RegisterPage);
      component = fixture.componentInstance;
      router = TestBed.inject(Router);
  
      spyOn(router, 'navigate'); // Spy before running ngOnInit()
    });
  
    it('should navigate to home after register', () => {
      component.register();
      expect(router.navigate).toHaveBeenCalledOnceWith(['home']); // Check if navigate is called with 'home'
    });
  
  });