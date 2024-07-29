import { TestBed } from '@angular/core/testing';

import { EtfApiService } from './etf-api.service';

describe('EtfApiService', () => {
  let service: EtfApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtfApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
