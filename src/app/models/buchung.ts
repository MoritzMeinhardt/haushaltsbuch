export class Buchung {
  wert: number;
  bezeichnung: string;
  date: Date;


  constructor(wert: number, bezeichnung: string) {
    this.wert = wert;
    this.bezeichnung = bezeichnung;
    this.date = new Date();
  }
}
