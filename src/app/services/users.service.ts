import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private myHttp: HttpClient) { }
  url= "https://epicode.online/epicodebeserviceunauth/api/users?page=0&size=100&sort=id,ASC"  
  users;

  public getUsers(){
    this.myHttp.get(this.url)
    .subscribe(
      response => {
        this.users = response['content'];
      }
    )
  }
}
