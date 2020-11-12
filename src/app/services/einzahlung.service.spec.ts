import {TestBed} from '@angular/core/testing';

import {EinzahlungService} from './einzahlung.service';

describe('EinzahlungService', () => {
    let einzahlungService: EinzahlungService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
    });

    beforeEach(() => {
        einzahlungService = TestBed.inject(EinzahlungService);
    });

    it('should be created', () => {
        expect(einzahlungService).toBeTruthy();
    });
});
