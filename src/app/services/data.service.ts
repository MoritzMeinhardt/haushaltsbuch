import {Injectable} from '@angular/core';
import {Buchung} from '../models/buchung';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private buchungsUebersichtData: Buchung[] = [];
    private buchungsUebersicht: BehaviorSubject<Buchung[]> = new BehaviorSubject([]);

    constructor() {
    }

    addBuchung(buchung: Buchung): void {
        this.buchungsUebersichtData.push(buchung);
        this.buchungsUebersicht.next(this.buchungsUebersichtData);
    }

    getBuchungsUebersicht$(): Observable<Buchung[]> {
        return this.buchungsUebersicht.asObservable().pipe(filter(obj => obj !== null || obj.length < 1));
    }
}
