import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Buchung } from '../models/buchung';

@Injectable({
    providedIn: 'root'
})
export class EinzahlungService {

    constructor(
        private dataService: DataService
    ) {
    }

    einzahlen = ((betrag: number) => {
        const einzahlungsBuchung: Buchung = this.getEinzahlungsBuchung(betrag);
        this.dataService.addBuchung(einzahlungsBuchung);
    }).bind(this);

    getEinzahlungsBuchung(betrag: number): Buchung {
        return new Buchung(betrag, null);
    }

}
