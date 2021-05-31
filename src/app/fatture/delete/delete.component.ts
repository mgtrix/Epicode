import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FattureService } from 'src/app/services/fatture.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(public fattService: FattureService, public router: Router, public actRoute: ActivatedRoute) { }
  fattura: any;
  fatturaDaEliminare: any;
  listaFatture: any;
  idDel: any;

  ngOnInit(): void {
    this.actRoute.params
      .subscribe(
        parametro => {
          this.idDel = parametro['id']; //params riesce a tirar fuori l'id 
          console.log('params ID: ' + this.idDel);

          this.fattService.getFatture(event)
            .subscribe(
              response => {
                this.listaFatture = response['content'];
                console.log(this.listaFatture);
                this.fatturaDaEliminare = this.listaFatture.find(f => f.idDel == this.idDel);
                console.log(this.fatturaDaEliminare);
                return this.fattService.deleteFattura(this.idDel , this.fattura)
              }
            )
        }
      ),
      error => console.log('error'),
      () => console.log('chiamata DELETE completed!')
  }

}


