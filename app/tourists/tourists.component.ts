import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { TouristService, Tourist } from '../services/tourist.service';
import { TouristTemplateComponent } from '../tourist-template/tourist-template.component';



@Component({
  selector: 'app-tourists',
  templateUrl: './tourists.component.html',
  styleUrls: ['./tourists.component.scss'],
  providers: [TouristService]
})
export class TouristsComponent implements OnInit {

  tourists: Tourist[];
  constructor(private apiService: BackendApiService, private touristService: TouristService) { }

  ngOnInit() {
    this.touristService.getTourists().subscribe((res: Tourist[]) => {
      this.tourists = res.reverse();
    });
  }

}
