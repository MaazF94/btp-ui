import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedAdviceComponent } from './received-advice.component';

describe('ReceivedAdviceComponent', () => {
  let component: ReceivedAdviceComponent;
  let fixture: ComponentFixture<ReceivedAdviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedAdviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
