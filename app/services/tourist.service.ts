import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';
import { GlobalVariable } from '../global';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TouristService {

  constructor(private httpClient: HttpClient) { }

   getTourists() : Observable<Tourist[]> {
  	let touristArray = [];
  	let touristsData = this.httpClient.get<Tourist[]>(`${GlobalVariable.PHP_API_SERVER}/getTourists.php`)
  	.pipe(map((tourists) => {
  		touristArray = tourists;
  		return touristArray;
  	}));

  	return touristsData;
  }

  addTourist(user): Observable<any>{
    return this.httpClient.post<any>(`${GlobalVariable.PHP_API_SERVER}/add.php`, user);
  }
}

export class Tourist {
	id: number;
    name:  string; 
    surname: string;
    middlename: string;
    birthday: string;
    hint: string;
    image: string;
    phone: string;
    email: string;
    addedBy: number;
    vk: string;
    viber: string;
    instagram: string;
}
