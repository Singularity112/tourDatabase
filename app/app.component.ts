import { Component, OnInit} from '@angular/core';
import { BackendApiService } from './backend-api.service';
import { User } from './users';
 
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
   this.apiService.getCurrentUser().then( user => {
     this.isLogined = user.isLogined;
   });
  }
}
