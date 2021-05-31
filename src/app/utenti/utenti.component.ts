import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css']
})
export class UtentiComponent implements OnInit {

  constructor(public get: UsersService) { }
  users = this.get.users;
  ngOnInit(): void {
    this.get.getUsers()
  }

}
