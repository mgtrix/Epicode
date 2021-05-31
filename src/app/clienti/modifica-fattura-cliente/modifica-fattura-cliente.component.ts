import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientiService } from 'src/app/services/clienti';

@Component({
  selector: 'app-modifica-fattura-cliente',
  templateUrl: './modifica-fattura-cliente.component.html',
  styleUrls: ['./modifica-fattura-cliente.component.css']
})
export class ModificaFatturaClienteComponent implements OnInit {

  constructor(public actRoute: ActivatedRoute, public clientServ: ClientiService) { }
  
  fattura:any;
  numeroFattura:number;
  id=0;
  numero;

  ngOnInit() {
    this.actRoute.params
   .subscribe(
    params => {
      console.log(params)
      this.id = params['id'];
      console.log('id '+ this.id );
      this.clientServ.getFatturaSingolaCliente(this.id)
      .subscribe(
        response => { 
          this.fattura = response; 
          console.log(this.fattura);
          // this.fattura = this.fatture.find(f =>f.id = this.id)
          // console.log(this.fattura)
         }
      )
  }
   )
  }

}
