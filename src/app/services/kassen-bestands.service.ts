import { Injectable } from '@angular/core';
import {Buchung} from '../models/buchung';

@Injectable({
  providedIn: 'root'
})
export class KassenBestandsService {
    berechneKasssenBestand(alleBuchungen: Buchung[]): number {
        return alleBuchungen.reduce((accumulator, currentValue) => accumulator + currentValue.wert, 0);
    }
}
