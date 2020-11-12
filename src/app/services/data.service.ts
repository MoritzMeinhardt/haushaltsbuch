import { Injectable } from '@angular/core';
import { Buchung } from '../models/buchung';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  buchungsUebersicht: Buchung[];

  constructor() { }

  addBuchung(buchung: Buchung): void {
    this.buchungsUebersicht.push(buchung);
  }

  getBuchungsUebersicht(): Buchung[] {
    return this.buchungsUebersicht;
  }
}
