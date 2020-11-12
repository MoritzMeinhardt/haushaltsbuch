import {Injectable} from '@angular/core';
import {Kategorie} from '../models/kategorie';
import {EinzahlungService} from './einzahlung.service';
import {AuszahlungService} from './auszahlung.service';
import {UebersichtService} from './uebersicht.service';

export enum Action {
    EINZAHLEN = 'einzahlen',
    AUSHZAHLEN = 'auszahlen',
    UEBERSICHT = 'uebersicht'
}

@Injectable({
    providedIn: 'root'
})
export class BefehlErkennenService {

    constructor(
        private einzahlService: EinzahlungService,
        private auszahlungsService: AuszahlungService,
        private uebersichtsService: UebersichtService,
    ) {
    }

    public befehlErkennen(
        args: string[],
        onEinzaehlen: (betrag: number) => any,
        onAuszahlung: (kategorie: Kategorie) => any,
        onUebersicht: (kategorien: Kategorie[]) => any
    ): void {
        const action: Action = this.getActionFromArg(args[0]);
        onEinzaehlen.bind(this.einzahlService);
        onAuszahlung.bind(this.auszahlungsService);
        onUebersicht.bind(this.uebersichtsService);

        switch (action) {
            case Action.EINZAHLEN:
                const wert = this.getWertFromArg(args[1]);
                onEinzaehlen(wert);
                break;
            case Action.AUSHZAHLEN:
                onAuszahlung(null);
                break;
            case Action.UEBERSICHT:
                onUebersicht(null);
                break;
        }
    }

    private getActionFromArg(arg: string): Action {
        switch (arg.toLowerCase()) {
            case Action.EINZAHLEN:
                return Action.EINZAHLEN;
            case Action.AUSHZAHLEN:
                return Action.AUSHZAHLEN;
            case Action.UEBERSICHT:
                return Action.UEBERSICHT;
            default:
                throw new Error('Action unknown. Must be of Type: einzahlen, auszahlen, uebersicht.');
        }
    }

    private getWertFromArg(arg: string): number {
        return +arg;
    }

}
