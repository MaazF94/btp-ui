import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalLandingComponent } from './professional-landing.component';

describe('ProfessionalLandingComponent', () => {
  let component: ProfessionalLandingComponent;
  let fixture: ComponentFixture<ProfessionalLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
