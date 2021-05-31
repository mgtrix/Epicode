import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientiService } from 'src/app/services/clienti';


@Component({
  selector: 'app-add-fattura-cliente',
  templateUrl: './add-fattura-cliente.component.html',
  styleUrls: ['./add-fattura-cliente.component.css']
})
export class AddFatturaClienteComponent implements OnInit {

  constructor(public clientServ: ClientiService, public actRoute: ActivatedRoute) { }
  
  idCliente=1;
  id=1;
  data;
  numero =0;
  anno;
  importo;
  string='';
  stato ={"id": 1,
  "nome": this.string}

  cliente={'id': this.idCliente}



  addPostFattura() {
    this.clientServ.addFatturaCliente(this.id, this.data, this.numero, this.anno, this.importo, this.stato, this.cliente)
      .subscribe(
        response => {
          console.log(response)
        }
      )
  }

  ngOnInit() {
    this.actRoute.params
      .subscribe(
        params => {
          this.idCliente = params['id']
          this.cliente.id = params['id']
          console.log(this.idCliente)
        }
      )

  }

}
