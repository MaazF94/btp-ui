import { TestBed } from '@angular/core/testing';

import { CategoryProfessionService } from './category-profession.service';

describe('CategoryProfessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryProfessionService = TestBed.get(CategoryProfessionService);
    expect(service).toBeTruthy();
  });
});
