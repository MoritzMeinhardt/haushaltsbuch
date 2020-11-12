import { TestBed } from '@angular/core/testing';

import { AuszahlungService } from './auszahlung.service';

describe('AuszahlungService', () => {
  let service: AuszahlungService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuszahlungService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
