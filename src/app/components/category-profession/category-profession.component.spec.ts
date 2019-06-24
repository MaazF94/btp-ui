import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProfessionComponent } from './category-profession.component';

describe('CategoriesComponent', () => {
  let component: CategoryProfessionComponent;
  let fixture: ComponentFixture<CategoryProfessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryProfessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryProfessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
