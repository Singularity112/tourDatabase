import { Component, OnInit } from '@angular/core';
import { BackendApiService, User } from '../services/backend-api.service';


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
     this.apiService.getCurrentUser().subscribe((user: User) => {
       this.username = user.name;
     });
  }

}
