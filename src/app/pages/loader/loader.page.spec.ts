import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { LoaderPage } from './loader.page';
import { Router } from '@angular/router';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoaderPage],
      providers: [
        {
          provide: Router,
          useValue: jasmine.createSpyObj('Router', ['navigate']),
        },
      ],
    });

    fixture = TestBed.createComponent(LoaderPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router); // Use inject instead of get

    spyOn(router, 'navigate'); // Spy before running ngOnInit()
  });

  it('should navigate to login page after 2 seconds', fakeAsync(() => {
    component.ngOnInit(); // Call ngOnInit
    tick(2000); // Simulate 2 seconds passing
    expect(router.navigate).toHaveBeenCalledOnceWith(['login']);
  }));
});
