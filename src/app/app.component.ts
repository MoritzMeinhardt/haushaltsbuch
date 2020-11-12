import { Component } from '@angular/core';
import { BefehlErkennenService } from './services/befehl-erkennen.service';
import { EinzahlungService } from './services/einzahlung.service';
import { AuszahlungService } from './services/auszahlung.service';
import { UebersichtService } from './services/uebersicht.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'haushaltsbuch';

  constructor(private befehlErkennenService: BefehlErkennenService,
              private einzahlService: EinzahlungService,
              private auszahlungsService: AuszahlungService,
              private uebersichtsService: UebersichtService,
              private dataService: DataService) {
  }

  onStart(args: string) {
    this.befehlErkennenService.befehlErkennen([...args], this.einzahlService.einzahlen, this.auszahlungsService.auszahlen, this.uebersichtsService.getUebersicht);
  }
}
