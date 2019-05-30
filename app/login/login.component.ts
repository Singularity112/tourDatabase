import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  currentUser: any;
  login: string;
  password: string;

  onKeyPassword(event: any) {
  	this.password = event.target.value;
  }

  onKeyLogin(event: any) {
  	this.login = event.target.value;
  }

  onLoginClick() {

  	this.currentUser = window.localStorage.getItem('user');
    this.currentUser = JSON.parse(this.currentUser);

    const user = {
    	"login" : this.login,
    	"password" : this.password
    };


	console.log(user);
	window.localStorage.setItem('user', JSON.stringify(user));
	window.location.href = "/";
  }  

  constructor(private router: Router) { }

}
