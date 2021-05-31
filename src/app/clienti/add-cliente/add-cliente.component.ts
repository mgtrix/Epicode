import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientiService } from 'src/app/services/clienti';
import { FattureService } from 'src/app/services/fatture.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {

  constructor(public clientService: ClientiService, public router: Router) { }
  id;
  ragioneSociale;
  partitaIva;
  tipoCliente;
  email;
  pec;
  telefono;
  nomeContatto;
  cognomeContatto;
  telefonoContatto;
  emailContatto;
  indirizzo;
  numerocivico;
  cap;
  localita;
  comune;
  provincia;
  


  
  addClientePost(){
    this.clientService.addClient(this.id,this.ragioneSociale,this.partitaIva,this.tipoCliente,this.email,this.pec, this.telefono, this.nomeContatto, this.cognomeContatto, this.telefonoContatto, this.emailContatto, this.indirizzo, this.numerocivico,this.cap,this.localita,this.comune, this.provincia )
    .subscribe(
      response => {
        console.log(response)
        this.router.navigate(['clienti'])
      }
    )
  }

  ngOnInit(): void {
   
  }

}
