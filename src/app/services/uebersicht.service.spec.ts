import { TestBed } from '@angular/core/testing';

import { UebersichtService } from './uebersicht.service';

describe('UebersichtService', () => {
  let service: UebersichtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UebersichtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
