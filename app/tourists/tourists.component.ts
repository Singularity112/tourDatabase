import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../backend-api.service';
import { Tourist } from '../tourist'

@Component({
  selector: 'app-tourists',
  templateUrl: './tourists.component.html',
  styleUrls: ['./tourists.component.scss']
})
export class TouristsComponent implements OnInit {

  tourists: Tourist[];
  constructor(private apiService: BackendApiService) { }

  ngOnInit() {
  	this.apiService.getTourists().then(tourists => {
      this.tourists = tourists;
    });
  }

}
