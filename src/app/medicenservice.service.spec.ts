import { TestBed } from '@angular/core/testing';

import { MedicenserviceService } from './medicenservice.service';

describe('MedicenserviceService', () => {
  let service: MedicenserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicenserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
