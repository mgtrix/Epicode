
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private myHttp: HttpClient) { }
  url = 'https://epicode.online/epicodebeserviceunauth/api/auth/signup';

 

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  options = { headers: this.headers }

  inviaServiceDatiSign(username, password, email, role) {
    const datiJson = {
      username: username,
      password: password,
      email: email,
      role: role
    }
    let datiString = JSON.stringify(datiJson);
    console.log(datiString)
    return this.myHttp.post(this.url, datiJson, this.options)
  }
}
