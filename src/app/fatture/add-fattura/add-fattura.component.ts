import { Component, OnInit } from '@angular/core';
import { FattureService } from 'src/app/services/fatture.service';

@Component({
  selector: 'app-add-fattura',
  templateUrl: './add-fattura.component.html',
  styleUrls: ['./add-fattura.component.css']
})
export class AddFatturaComponent implements OnInit {

  constructor(public fattService: FattureService) { }
  data
  numero
  anno
  importo
  stato
  cliente= {"id":0};

  addPostFattura() {
    this.fattService.addFatturaCliente(this.data, this.numero, this.anno,this.importo,this.stato,this.cliente)
    .subscribe(
      response => {
        console.log(response)
      }
    )
  }
  ngOnInit(): void {
  }

}
