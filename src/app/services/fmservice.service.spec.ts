import { TestBed } from '@angular/core/testing';

import { FMServiceService } from './fmservice.service';

describe('FMServiceService', () => {
  let service: FMServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FMServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
