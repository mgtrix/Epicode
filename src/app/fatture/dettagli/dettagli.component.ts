import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FattureService } from 'src/app/services/fatture.service';


@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.css']
})
export class DettagliComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute,public fattService: FattureService, public router:Router) { }
  fatture:any;
  id = 0;
  fattura:any;
  

  ngOnInit(){
   this.actRoute.params
   .subscribe(
    params => {
      this.id = params['id'];
      console.log('ID'+ this.id );
      this.fattService.getFatture(event)
      .subscribe(
        response => { 
          this.fatture = response['content']; 
          console.log(this.fatture);
          this.fattura = this.fatture.find(f => f.id == this.id);
          console.log(this.fattura);
         }
      )
  }
   )

  }   
  

}
