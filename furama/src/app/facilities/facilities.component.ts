import {Component, OnInit} from '@angular/core';
import {Facility} from "../model/facility";

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {

  constructor() {
  }

  facilitys: Array<Facility> = [{
    id:1,
    name: 'OCEAN SUITE',
    area: 85.8,
    cost: 223,
    image: '../../assets/image/home.jpg',
    maxPeople: 20,
    rentType: 'day'
  },{id:2,
    name: 'OCEAN STUDIO SUITE',
    area: 40.1,
    cost: 223,
    image: '../../assets/image/home.jpg',
    maxPeople: 20,
    rentType: 'day'
  },{id:3,
    name: 'OCEAN DELUXE',
    area: 43.7,
    cost: 223,
    image: '../../assets/image/home.jpg',
    maxPeople: 20,
    rentType: 'day'
  },{id:4,
    name: 'LAGOON SUPERIOR',
    area: 40.1,
    cost: 223,
    image: '../../assets/image/home.jpg',
    maxPeople: 20,
    rentType: 'day'
  },{id:5,
    name: 'GARDEN SUPERIOR',
    area: 40.1,
    cost: 223,
    image: '../../assets/image/home.jpg',
    maxPeople: 20,
    rentType: 'day'
  }];

  ngOnInit(): void {
  }

}
