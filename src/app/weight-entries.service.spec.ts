import { TestBed } from '@angular/core/testing';

import { WeightEntriesService } from './weight-entries.service';

describe('WeightEntriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeightEntriesService = TestBed.get(WeightEntriesService);
    expect(service).toBeTruthy();
  });
});
