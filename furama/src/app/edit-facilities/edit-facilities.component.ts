import {Component, OnInit} from '@angular/core';
import {RentType} from "../model/rent-type";
import {Type} from "../model/type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../service/facility.service";
import {ActivatedRoute, Router} from "@angular/router";
import {of} from "rxjs";

@Component({
  selector: 'app-edit-facilities',
  templateUrl: './edit-facilities.component.html',
  styleUrls: ['./edit-facilities.component.css']
})
export class EditFacilitiesComponent implements OnInit {
  rentTypes: RentType[];
  types: Type[];
  typeChoose: number;
  FacilityForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required]),
    type: new FormControl(),
    area: new FormControl(),
    cost: new FormControl(),
    image: new FormControl('../../assets/image/home.jpg'),
    maxPeople: new FormControl(),
    rentType: new FormControl(),
    standardRoom: new FormControl(),
    descriptionOtherConvenience: new FormControl(),
    poolArea: new FormControl(),
    numberOfFloors: new FormControl(),
    facilityFree: new FormControl(),
  })

  constructor(private facilityService: FacilityService, private route: Router, private activatedRoute: ActivatedRoute) {
    this.facilityService.getRentType().subscribe(next => this.rentTypes = next);
    this.facilityService.getType().subscribe(next => this.types = next);
    this.activatedRoute.paramMap.subscribe(next => {
      const id = parseInt(next.get('id'));
      if (id != null) {
        this.facilityService.findById(id).subscribe(next => {
          switch (next.type.id) {
            case 1:
              this.typeChoose = 1;
              break;
            case 2:
              this.typeChoose = 2;
              break;
            case 3:
              this.typeChoose = 3;
              break;
          }
          this.FacilityForm.patchValue(next);
        })

      }
    })
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.FacilityForm.valid) {
      this.facilityService.putById(this.FacilityForm.value).subscribe(next => {
        this.route.navigateByUrl("/listFacilities");
      })
    }
  }

  compare(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;

  }

  change(event) {
    switch (event.target.value.slice(0, 1)) {
      case '1':
        this.typeChoose = 1;
        break;
      case '2':
        this.typeChoose = 2;
        break;
      case '3':
        this.typeChoose = 3;
        break;
    }
  }
}
