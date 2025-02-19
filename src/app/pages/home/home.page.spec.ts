import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { Router } from '@angular/router';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HomePage],
        providers: [
          {
            provide: Router,
            useValue: jasmine.createSpyObj('Router', ['navigate']),
          },
        ],
      });
  
      fixture = TestBed.createComponent(HomePage);
      component = fixture.componentInstance;
      router = TestBed.inject(Router);
  
      spyOn(router, 'navigate'); // Spy before running ngOnInit()
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  
    it('should navigate to pickup-call on see all', () => {
      component.goToPickupCalls();
      expect(router.navigate).toHaveBeenCalledOnceWith(['pickup-calls']);
    });

    it('should navigate to pickup-call on create pickup call', () => {
      component.newPickupCall();
      expect(router.navigate).toHaveBeenCalledOnceWith(['pickup-call']);
    });

  
  });
