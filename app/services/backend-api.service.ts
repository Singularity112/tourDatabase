import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';
import { GlobalVariable } from '../global';

@Injectable({
  providedIn: 'root'
})

export class BackendApiService {
  loginedUser: User;


  getUsers(): Observable<User[]> {

  	let usersArray = [];
  	let bufferedUser;

  	let userData = this.httpClient.get<User[]>(`${GlobalVariable.PHP_API_SERVER}/getUserData.php`).pipe(map((users) => {
  		return users;
  	}));

  	return userData;
  }

  isLogined(): Observable<boolean> {
  	let currentUser = JSON.parse(window.localStorage.getItem('user'));
  	return this.httpClient.post<boolean>(`${GlobalVariable.PHP_API_SERVER}/isLoginedUser.php`, currentUser);
  }

  getCurrentUser(): Observable<User> {
  	let currentUser = JSON.parse(window.localStorage.getItem('user'));
  	return this.httpClient.post<User>(`${GlobalVariable.PHP_API_SERVER}/getCurrentUser.php`, currentUser);
  }
  
  constructor(private httpClient: HttpClient) { }
}

export interface User {
    id: number;
    login:  string;
    password: string;
    name: string;
    isLogined: boolean;
}
