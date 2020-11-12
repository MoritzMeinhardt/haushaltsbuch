import { TestBed } from '@angular/core/testing';

import { BefehlErkennenService } from './befehl-erkennen.service';

describe('BefehlErkennenService', () => {
  let service: BefehlErkennenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BefehlErkennenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
