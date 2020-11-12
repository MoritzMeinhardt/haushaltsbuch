import { TestBed } from '@angular/core/testing';

import { SplitInputToArgService } from './split-input-to-arg.service';

describe('SplitInputToArgService', () => {
  let service: SplitInputToArgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SplitInputToArgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should split', () => {
    const input = 'einzahlen 100';

    expect(service.splitInputToArg(input)).toBe(['einzahlen', '100']);
  });
});
