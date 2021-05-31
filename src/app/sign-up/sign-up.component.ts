import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public signup: SignupService) { }
  username: string;
  password: string;
  email: string;
  role = ['user'];

  inviaDatisignUp() {
    this.signup.inviaServiceDatiSign(this.username, this.password, this.email, this.role)
      .subscribe(
        response => {
          console.log(response)
        }
      )
  }
  ngOnInit(): void {

  }

}
