import { Component, OnInit } from '@angular/core';
import { TouristService, Tourist } from '../services/tourist.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  tourists: Tourist[];

  constructor(private touristService: TouristService) { }

  ngOnInit() {
  	this.touristService.getTourists().subscribe(tourists => {
     this.tourists = tourists;
   });
  }

}
