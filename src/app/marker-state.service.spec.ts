import { TestBed } from '@angular/core/testing';

import { MarkerStateService } from './marker-state.service';

describe('MarkerStateService', () => {
  let service: MarkerStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkerStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
