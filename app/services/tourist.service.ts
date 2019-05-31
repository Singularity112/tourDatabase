import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from  'rxjs';
import { GlobalVariable } from '../global';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TouristService {

  constructor(private httpClient: HttpClient) { }

   getTourists() : Observable<Tourist[]> {
  	return this.httpClient.get<Tourist[]>(`${GlobalVariable.PHP_API_SERVER}/getTourists.php`)
  	.pipe( (tourists) => {
      return tourists;
    });

  }

  getTourist(id) : Observable<Tourist> {
    return this.httpClient.post<Tourist>(`${GlobalVariable.PHP_API_SERVER}/getTourist.php`, id)
    .pipe( (tourist) => {
      return tourist;
    });
  }

  addTourist(user): Observable<any>{
    return this.httpClient.post<any>(`${GlobalVariable.PHP_API_SERVER}/add.php`, user);
  }
}

export interface Tourist {
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
