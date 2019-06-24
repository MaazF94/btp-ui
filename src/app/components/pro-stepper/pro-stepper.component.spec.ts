import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProStepperComponent } from './pro-stepper.component';

describe('ProStepperComponent', () => {
  let component: ProStepperComponent;
  let fixture: ComponentFixture<ProStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
