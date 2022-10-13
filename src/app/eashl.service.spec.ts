import { TestBed } from '@angular/core/testing';

import { EashlService } from './eashl.service';

describe('EashlService', () => {
  let service: EashlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EashlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
