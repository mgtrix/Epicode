import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientiService } from 'src/app/services/clienti';

@Component({
  selector: 'app-modifica-cliente',
  templateUrl: './modifica-cliente.component.html',
  styleUrls: ['./modifica-cliente.component.css']
})
export class ModificaClienteComponent implements OnInit {

  constructor(public actRoute: ActivatedRoute, public clientServ: ClientiService) { }
  id=0;
  cliente;
  ngOnInit(): void {
    this.actRoute.params
   .subscribe(
    params => {
      this.id = params['id'];
      console.log('ID'+ this.id );
      this.clientServ.getInfoCliente(this.id)
      .subscribe(
        response => {  
          this.cliente = response; 
          console.log(this.cliente);
         }
      )
  }
   )
  }

}
