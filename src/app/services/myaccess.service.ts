import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login';


@Injectable({
  providedIn: 'root'
})
export class MyaccessService {

  constructor(public login:LoginService) { }

  myToken= this.login.myToken;
  myHeader = new HttpHeaders().set('Authorization', 'Bearer' + this.myToken)
  
 

}
