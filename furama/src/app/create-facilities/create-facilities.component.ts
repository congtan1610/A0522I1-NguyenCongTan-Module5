import { Component, OnInit } from '@angular/core';
import {RentType} from "../model/rent-type";
import {FacilityService} from "../service/facility.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Type} from "../model/type";
import {applySourceSpanToExpressionIfNeeded} from "@angular/compiler/src/output/output_ast";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-facilities',
  templateUrl: './create-facilities.component.html',
  styleUrls: ['./create-facilities.component.css']
})
export class CreateFacilitiesComponent implements OnInit {
  rentTypes:RentType[];
  types:Type[];
  typeChoose:number;
  FacilityForm:FormGroup=new FormGroup({
    id:new FormControl(),
    name: new FormControl('',[Validators.required]),
    type:new FormControl(),
    area: new FormControl(),
    cost: new FormControl(),
    image: new FormControl('../../assets/image/home.jpg'),
    maxPeople: new FormControl(),
    rentType: new FormControl(),
    standardRoom:new FormControl(),
    descriptionOtherConvenience:new FormControl(),
    poolArea:new FormControl(),
    numberOfFloors:new FormControl(),
    facilityFree:new FormControl(),
  })
  constructor(private facilityService:FacilityService,private route:Router) {
    this.facilityService.getRentType().subscribe(next=>this.rentTypes = next);
    this.facilityService.getType().subscribe(next=>this.types=next);
  }

  ngOnInit(): void {
  }

  submit() {
  if (this.FacilityForm.valid){
    this.facilityService.addNew(this.FacilityForm.value).subscribe(next=>{
      this.route.navigateByUrl("/listFacilities");
    })
  }
  }


  change(event) {
    switch (event.target.value.slice(0,1)) {
      case '1':this.typeChoose=1;break;
      case '2':this.typeChoose=2;break;
      case '3':this.typeChoose=3;break;
    }
  }
}
