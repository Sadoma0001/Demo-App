import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PickupCallCardComponent } from './pickup-call-card.component';

describe('PickupCallCardComponent', () => {
  let component: PickupCallCardComponent;
  let fixture: ComponentFixture<PickupCallCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PickupCallCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PickupCallCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
