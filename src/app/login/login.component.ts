
import { Component, OnInit } from '@angular/core';
import { ClientiService } from '../services/clienti';
import { LoginService } from '../services/login';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public login: LoginService, public get: ClientiService) { }
  username: string;
  password:string;
  accessToken;

  inviaDatiLogin(){
    this.login.inviaServiceDati(this.username, this.password)
  }


  ngOnInit(): void {
  }

}
