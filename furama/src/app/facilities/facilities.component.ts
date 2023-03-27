import {Component, OnInit} from '@angular/core';
import {Facility} from "../model/facility";
import {FacilityService} from "../service/facility.service";

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {
  facilitys:Array<Facility>=[];
  constructor(private facilityService:FacilityService) {
    this.facilitys=this.facilityService.getAll();
  }

  ngOnInit(): void {
  }

}
