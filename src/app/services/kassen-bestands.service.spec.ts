import { TestBed } from '@angular/core/testing';

import { KassenBestandsService } from './kassen-bestands.service';

describe('KassenBestandsService', () => {
  let service: KassenBestandsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KassenBestandsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
