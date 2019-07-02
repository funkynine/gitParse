import { TestBed } from '@angular/core/testing';

import { TakeDateService } from './take-date.service';

describe('TakeDateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TakeDateService = TestBed.get(TakeDateService);
    expect(service).toBeTruthy();
  });
});
