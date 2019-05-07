import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../backend-api.service';
import { User } from '../users';


@Component({
  selector: 'app-onepage',
  templateUrl: './onepage.component.html',
  styleUrls: ['./onepage.component.scss']
})
export class OnepageComponent {

  isNotification : boolean = true;
  users: User[];
  username: string;

  constructor(private apiService: BackendApiService) { }

  ngOnInit() {
     this.apiService.getCurrentUser().then( user => {
       this.username = user.name;
     });
  }

}
