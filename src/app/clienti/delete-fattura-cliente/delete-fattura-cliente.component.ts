import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientiService } from 'src/app/services/clienti';

@Component({
  selector: 'app-delete-fattura-cliente',
  templateUrl: './delete-fattura-cliente.component.html',
  styleUrls: ['./delete-fattura-cliente.component.css']
})
export class DeleteFatturaClienteComponent implements OnInit {

  constructor(public router: Router, public actRoute: ActivatedRoute, public clientServ: ClientiService) { }
  fatturaCliente: any;
  fatturaClienteDaEliminare: any;
  listaFatture: any;
  idDel: any;

  ngOnInit(): void {
    this.actRoute.params
      .subscribe(
        parametro => {
          this.idDel = parametro['id']; //params riesce a tirar fuori l'id 
          console.log('params ID: ' + this.idDel);

          this.clientServ.getFattureCliente(this.idDel)
            .subscribe(
              response => {
                this.listaFatture = response['content'];
                console.log(this.listaFatture);
                this.fatturaClienteDaEliminare = this.listaFatture.find(f => f.idDel == this.idDel);
                console.log(this.fatturaClienteDaEliminare);
                return this.clientServ.deleteFatturaCliente(this.idDel, this.fatturaCliente)
              }
            )
        }
      ),
      error => console.log('error'),
      () => console.log('chiamata DELETE completed!')
  }

}
