import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'haushaltsbuch';

  public ausgabe: string;

  onStart(args: string) {
    this.ausgabe = args;
  }
}
