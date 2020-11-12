import { Injectable } from '@angular/core';
import { Kategorie } from '../models/kategorie';

enum Action {
  EINZAHLEN,
  AUSHZAHLEN,
  UEBERSICHT
}

@Injectable({
  providedIn: 'root'
})
export class BefehlErkennenService {

  constructor() { }

  public befehlErkennen(args: string[], onEinzaehlen: (betrag: number) => any, onAuszahlung: (kategorie: Kategorie) => any, onUebersicht: (kategorien: Kategorie[]) => any): void {
/*    const action: Action = Action.EINZAHLEN;

    switch(action) {
      case Action.EINZAHLEN:
        break;
      case Action.AUSHZAHLEN:
        break;
      case Action.UEBERSICHT:
        break;
    }*/


  }
}
