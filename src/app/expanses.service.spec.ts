import { TestBed } from '@angular/core/testing';

import { ExpansesService } from './expanses.service';

describe('ExpansesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpansesService = TestBed.get(ExpansesService);
    expect(service).toBeTruthy();
  });
});
