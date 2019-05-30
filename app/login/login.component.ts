import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor() { }

  login: string;
  password: string;

  onLoginClick() {

    const user = {
    	"login" : this.login,
    	"password" : this.password
    };

	  window.localStorage.setItem('user', JSON.stringify(user));
    window.location.reload();
  }  

}
