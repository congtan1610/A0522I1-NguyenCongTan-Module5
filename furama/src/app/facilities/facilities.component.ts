import {Component, OnInit} from '@angular/core';
import {Facility} from "../model/facility";
import {FacilityService} from "../service/facility.service";
import {Route, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {
  facilitys: Facility[];
  id_del: number;
  fac: Facility;
  mess:string;
  Search: FormGroup = new FormGroup({
    name: new FormControl()
  })
  p: number;

  constructor(private facilityService: FacilityService) {
    this.facilityService.getAll().subscribe(next => this.facilitys = next);
  }

  ngOnInit(): void {
  }

  check_del(id: number) {
    this.id_del = id;
    this.facilityService.findById(id).subscribe(next => {
      this.fac = next;
    });
  }

  del(id_del: number) {
    this.facilityService.delete(id_del).subscribe(next => {
      location.reload();
    })
  }

  submit() {
    if (this.Search.valid) {
      if (this.Search.value.name == null) {
        return this.facilitys
      } else {
        this.facilityService.findByName(this.Search.value.name).subscribe(next => {
          if (next.length != 0) {
            this.facilitys = next;
            this.mess=null;
          } else {
            this.mess="Not found by "+this.Search.value.name;
            this.facilitys=[]
          }
        })
      }

    }
  }
}
