import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { TouristService, Tourist } from '../services/tourist.service';

@Component({
  selector: 'app-tourist-template',
  templateUrl: './tourist-template.component.html',
  styleUrls: ['./tourist-template.component.scss']
})
export class TouristTemplateComponent implements OnInit {

  @Input() tourists: Tourist[];

  constructor() { }

  ngOnInit() {
  }

}
