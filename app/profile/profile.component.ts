import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TouristService, Tourist } from '../services/tourist.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

   tourist: Tourist;

  constructor(private route: ActivatedRoute, private touristService: TouristService ) {
  	let id = parseInt(this.route.snapshot.paramMap.get("id"));

  	this.touristService.getTourist(id).subscribe(tourist => {
     this.tourist = tourist;
     console.log(this.tourist);
   });
  }

  ngOnInit() {

  }

}
