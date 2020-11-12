import {Component, OnInit} from '@angular/core';
import {BefehlErkennenService} from './services/befehl-erkennen.service';
import {EinzahlungService} from './services/einzahlung.service';
import {AuszahlungService} from './services/auszahlung.service';
import {UebersichtService} from './services/uebersicht.service';
import {DataService} from './services/data.service';
import {KassenBestandsService} from './services/kassen-bestands.service';
import {SplitInputToArgService} from './services/split-input-to-arg.service';
import {distinctUntilChanged} from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'haushaltsbuch';
    kassenBestand = 0;
    isMessageShown = false;

    constructor(
        private befehlErkennenService: BefehlErkennenService,
        private einzahlService: EinzahlungService,
        private auszahlungsService: AuszahlungService,
        private uebersichtsService: UebersichtService,
        private splitInputIntoArgsService: SplitInputToArgService,
        private dataService: DataService,
        private kassenBestandsService: KassenBestandsService,
    ) {
    }

    ngOnInit(): void {
        this.dataService.getBuchungsUebersicht$().pipe(distinctUntilChanged()).subscribe(uebersicht => {
            if (uebersicht.length > 0) {
                this.showMessage();
                this.kassenBestand = this.kassenBestandsService.berechneKasssenBestand(uebersicht);
            }
        });
    }

    onStart(input: string) {
        const args = this.splitInputIntoArgsService.splitInputToArg(input);
        this.hideMessage();
        this.befehlErkennenService.befehlErkennen(
            [...args],
            this.einzahlService.einzahlen,
            this.auszahlungsService.auszahlen,
            this.uebersichtsService.getUebersicht
        );
    }

    private showMessage() {
        this.isMessageShown = true;
    }

    private hideMessage() {
        this.isMessageShown = false;
    }
}
