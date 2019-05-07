import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from './users';
import { Observable } from  'rxjs';
import { Tourist } from './tourist';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  PHP_API_SERVER : string = 'http://localhost';
  loginedUser: User;

  addTourist(user): Observable<any>{
    return this.httpClient.post<any>(`${this.PHP_API_SERVER}/add.php`, user);
  }

  async getTourists(): Promise<Tourist[]> {

  	let touristArray = [];
  	let bufferedTourist;

  	let touristsData = await this.httpClient.get<Tourist[]>(`${this.PHP_API_SERVER}/getTourists.php`).toPromise();

  	touristsData.forEach((tourist) => {
		bufferedTourist = new Tourist();
		bufferedTourist.name = tourist.name;
		bufferedTourist.surname = tourist.surname;
		bufferedTourist.id = tourist.id;
		bufferedTourist.middlename = tourist.middlename;
		bufferedTourist.birthday = tourist.birthday;
		bufferedTourist.hint = tourist.hint;
		bufferedTourist.image = tourist.image;
		bufferedTourist.phone = tourist.phone;
		bufferedTourist.email = tourist.email;

		touristArray.push(bufferedTourist);
  	});

  	return touristArray;
  }


  async getUsers(): Promise<User[]> {

  	let usersArray = [];
  	let bufferedUser;

  	let userData = await this.httpClient.get<User[]>(`${this.PHP_API_SERVER}/getUserData.php`).toPromise();

  	userData.forEach((user) => {
		bufferedUser = new User();
		bufferedUser.name = user.name;
		bufferedUser.login = user.login;
		bufferedUser.id = user.id;
		bufferedUser.password = user.password;
		bufferedUser.isLogined = user.isLogined;

		usersArray.push(bufferedUser);
  	});

  	return usersArray;
  }


  async getCurrentUser(): Promise<User> {
 
 	let currentUser = JSON.parse(window.localStorage.getItem('user'));
	let user = new User();

	let users =  await this.getUsers();
	users.forEach((bufferedUser) => {
		if (bufferedUser.login == currentUser.login && bufferedUser.password == currentUser.password) {
		    user.id = bufferedUser.id;
		    user.name = bufferedUser.name;
		    user.password = bufferedUser.password;
		    user.isLogined = true;
		    user.login = bufferedUser.login;
	    }
	});
	return user;
  }
  
  constructor(private httpClient: HttpClient) { }
}
