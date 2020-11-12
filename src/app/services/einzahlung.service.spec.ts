import { TestBed } from '@angular/core/testing';

import { EinzahlungService } from './einzahlung.service';

describe('EinzahlungService', () => {
  let service: EinzahlungService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EinzahlungService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
