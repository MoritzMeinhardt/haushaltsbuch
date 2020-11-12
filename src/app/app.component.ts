import { Component } from '@angular/core';
import { BefehlErkennenService } from './services/befehl-erkennen.service';
import { EinzahlungService } from './services/einzahlung.service';
import { AuszahlungService } from './services/auszahlung.service';
import { UebersichtService } from './services/uebersicht.service';
import { DataService } from './services/data.service';
import { SplitInputToArgService } from './services/split-input-to-arg.service';

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
              private splitInputIntoArgsService: SplitInputToArgService,
              private dataService: DataService) {
  }

  onStart(input: string) {
    const args = this.splitInputIntoArgsService.splitInputToArg(input);
    this.befehlErkennenService.befehlErkennen([...args], this.einzahlService.einzahlen, this.auszahlungsService.auszahlen, this.uebersichtsService.getUebersicht);
  }
}
