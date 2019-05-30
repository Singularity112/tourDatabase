import { Component, OnInit} from '@angular/core';
import { BackendApiService, User } from './services/backend-api.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'database';

  isLogined: boolean;
  currentUser: any;

  constructor(private apiService: BackendApiService) {

  }

  ngOnInit() {
   this.apiService.isLogined().subscribe((res: boolean) => {
       this.isLogined = res;
     });
  }
}
