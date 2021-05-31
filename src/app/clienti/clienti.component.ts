import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientiService } from '../services/clienti';
import { LoginService } from '../services/login';
import { MyaccessService } from '../services/myaccess.service';



@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent implements OnInit {

  constructor( public clientServ: ClientiService, public post: LoginService,public access: MyaccessService ,  public actRoute: ActivatedRoute) { }

  clienti;
  pagina=1;
  page=1;
  pageSize=25;
  userId;
  getclient;
  searchText='';
  risultati=[];

  

  getPageFromService(event) {
    console.log(event)
    this.clientServ.getClienti(event)
      .subscribe(
          response => {
            this.clienti = response; 
          }
        )
    }
  
  search() {
      const cerca = this.searchText;
      const data = this.clienti.content;
      data.forEach((user) => {
        if (user.nomeContatto.indexOf(cerca) > -1) {
          console.log(user.nomeContatto)
          this.risultati.push(user);
        }
      })
    }  

  ngOnInit(){
    console.log(this.access.myToken)
    this.clientServ.getClienti()
    .subscribe(
        response => {
          this.clienti = response;
          console.log(this.clienti)
        }
      )
  }



}
