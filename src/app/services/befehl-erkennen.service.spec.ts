import { TestBed } from '@angular/core/testing';

import { Action, BefehlErkennenService } from './befehl-erkennen.service';

fdescribe('BefehlErkennenService', () => {
  let service: BefehlErkennenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BefehlErkennenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('einzahlen should be Action.EINZAHLEN', () => {
    const arg = 'einzahlen';
    const actual = service['getActionFromArg'](arg);
    const expected = Action.EINZAHLEN;

    expect(actual).toBe(expected);
  });

  it('auszahlen should be Action.AUSZAHLEN', () => {
    const arg = 'auszahlen';
    const actual = service['getActionFromArg'](arg);
    const expected = Action.AUSHZAHLEN;

    expect(actual).toBe(expected);
  });

  it('uebersicht should be Action.UEBERSICHT', () => {
    const arg = 'uebersicht';
    const actual = service['getActionFromArg'](arg);
    const expected = Action.UEBERSICHT;

    expect(actual).toBe(expected);
  });

  it('should be ignore case', () => {
    const arg = 'UeBerSichT';
    const actual = service['getActionFromArg'](arg);
    const expected = Action.UEBERSICHT;

    expect(actual).toBe(expected);
  });

  it('should raise error on unknown action', () => {
    const arg = 'unknown';

    expect(function () {
      service['getActionFromArg'](arg);
    }).toThrow();

  });

  it('should return wert from arg: 100.10', () => {
    const arg = '100.10';
    const actual = service['getWertFromArg'](arg);
    const expected = 100.10;

    expect(actual).toBe(expected);
  });
});
