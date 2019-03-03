import { TestBed } from '@angular/core/testing';

import { GoodreadsServiceService } from './goodreads-service.service';

describe('GoodreadsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoodreadsServiceService = TestBed.get(GoodreadsServiceService);
    expect(service).toBeTruthy();
  });
});
