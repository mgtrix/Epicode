import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientiService } from 'src/app/services/clienti';

@Component({
  selector: 'app-fattura-cliente',
  templateUrl: './fatture-cliente.component.html',
  styleUrls: ['./fattura-cliente.component.css']
})
export class FattureClienteComponent implements OnInit {

  constructor(public actRoute: ActivatedRoute, public clientFatt: ClientiService) { }
  fatture:any;
  id = 0;
  fattura:any;
  
  
  ngOnInit(): void {
    this.actRoute.params
   .subscribe(
    params => {
      this.id = params['id'];
      console.log('ID'+ this.id );
      this.clientFatt.getFattureCliente(this.id)
      .subscribe(
        response => {  
          this.fatture = response['content']; 
          console.log(this.fatture);
          this.fattura = this.fatture.find(f => f.id == this.id);
         }
      )
  }
   )
  }

}
