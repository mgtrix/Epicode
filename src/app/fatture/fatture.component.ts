import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FattureService } from '../services/fatture.service';
import { LoginService } from '../services/login';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent implements OnInit {

  constructor(public fattService: FattureService, public login: LoginService, private actRoute: ActivatedRoute) { }
  fatture;
  
  pagina=1;
  page=1;
  pageSize=25;
  logged = this.login.loggedUsers;

  getPageFromService(event) {
    console.log(event)
    this.fattService.getFatture(event)
      .subscribe(
          response => {
            this.fatture = response;
            console.log(this.fatture)
          }
        )
    }
    
    ngOnInit(){
      console.log(this.login.myToken)
      this.fattService.getFatture()
      .subscribe(
          response => {
            this.fatture = response;
          }
        )
    }
      
  }

 

  



