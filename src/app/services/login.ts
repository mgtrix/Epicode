import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private myHttp: HttpClient) { }
  myToken ='';
  myAccessToken = new HttpHeaders().set('Authorization', this.myToken)
  
  


  url = "https://epicode.online/epicodebeserviceunauth/api/auth/login"; 
  loggedUsers;
  inviaServiceDati(username, password) {
    const datiJson = {
      username: username,
      password: password
    }
 

    this.myHttp.post(this.url, datiJson)
    .subscribe(
      response=> {
        this.myToken = response['accessToken']
        console.log(this.myToken)
      }
    )
  }
}
