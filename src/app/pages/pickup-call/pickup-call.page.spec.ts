import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PickupCallPage } from './pickup-call.page';
import { Router } from '@angular/router';

describe('PickupCallPage', () => {
  let component: PickupCallPage;
  let fixture: ComponentFixture<PickupCallPage>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PickupCallPage],
      providers: [
        {
          provide: Router,
          useValue: jasmine.createSpyObj('Router', ['navigate']),
        },
      ],
    });

    fixture = TestBed.createComponent(PickupCallPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router); // Use inject instead of get

    spyOn(router, 'navigate'); // Spy before running ngOnInit()
  });

  it('should navigate to home on create new pickup call', () => {
    component.newPickupCall();
    expect(router.navigate).toHaveBeenCalledOnceWith(['home']);
  });
});
