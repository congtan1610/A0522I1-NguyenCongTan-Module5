import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../service/customer.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  editForm:FormGroup=new FormGroup({
    id: new FormControl(),
    name: new FormControl('',[Validators.required]),
    type: new FormControl('',[Validators.required]),
    dateOfBirth: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required]),
    idCard: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required])
  })
  types:string[];
  constructor(private customerService:CustomerService,private activatedRoute:ActivatedRoute){
    this.types=this.customerService.getType();
    this.activatedRoute.paramMap.subscribe(next=>{
      const id=parseInt(next.get('id'));
      if (id!=null){
        this.editForm.patchValue(this.customerService.findById(id));
      }
    })
  }

  ngOnInit(): void {
  }

  submit(editForm: FormGroup) {
    if (this.editForm.valid){

    }
  }
}
