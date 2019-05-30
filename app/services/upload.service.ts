import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { map } from  'rxjs/operators';
import { GlobalVariable } from '../global';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private httpClient: HttpClient) { }

   public uploadFile(data) {
    let uploadURL = `${GlobalVariable.PHP_API_SERVER}/upload.php`;
    return this.httpClient.post<any>(uploadURL, data);
  }
}
