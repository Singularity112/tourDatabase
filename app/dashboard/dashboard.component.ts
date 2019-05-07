import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../backend-api.service';
import { Tourist } from '../tourist'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  tourists: Tourist[];

  constructor(private apiService: BackendApiService) { }

  ngOnInit() {
  	this.apiService.getTourists().then(tourists => {
     this.tourists = tourists;
   });
  }

}
