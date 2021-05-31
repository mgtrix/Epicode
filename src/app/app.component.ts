import { Component } from '@angular/core';
import { ClientiService } from './services/clienti';
import { FattureService } from './services/fatture.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EpiCodeFinal';
  constructor(public clientService: ClientiService, public fattService: FattureService ){}
  ngOnInit(){
    // this.clientService.getClienti();
    // this.fattService.getFatture();
  }
}
