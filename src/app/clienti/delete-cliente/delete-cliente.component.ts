import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientiService } from 'src/app/services/clienti';

@Component({
  selector: 'app-delete-cliente',
  templateUrl: './delete-cliente.component.html',
  styleUrls: ['./delete-cliente.component.css']
})
export class DeleteClienteComponent implements OnInit {

  constructor(public router: Router, public actRoute: ActivatedRoute, public clientServ: ClientiService) { }
  idDel;
  clienteDaElimiare;
  clienti;

  ngOnInit(): void {
    this.actRoute.params
      .subscribe(
        parametro => {
          this.idDel = parametro['id']; //params riesce a tirar fuori l'id 
          console.log('params ID: ' + this.idDel);

          this.clientServ.getClienti()
            .subscribe(
              response => {
                this.clienti = response['content'];
                console.log(this.clienti);
                this.clienteDaElimiare = this.clienti.find(f => f.idDel == this.idDel);
                console.log(this.clienteDaElimiare);
                return this.clientServ.deleteCliente(this.idDel, this.clienteDaElimiare)
              }
            )
        }
      ),
      error => console.log('error'),
      () => console.log('chiamata DELETE completed!')
  }

}
