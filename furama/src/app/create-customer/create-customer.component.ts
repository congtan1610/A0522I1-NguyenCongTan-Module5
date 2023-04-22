import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../service/customer.service";
import {Router} from "@angular/router";
import {TypeCus} from "../model/type-cus";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  newForm: FormGroup= new FormGroup({
    id:new FormControl(),
    name: new FormControl('',[Validators.required]),
    typeCus: new FormControl(null,[Validators.required]),
    dateOfBirth: new FormControl('',[Validators.required,this.validate1]),
    gender: new FormControl('',[Validators.required]),
    idCard: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    address: new FormControl('',[Validators.required])
  });
  types:TypeCus[];
  constructor(private customerService: CustomerService, private route: Router) {
    this.customerService.getTypeCus().subscribe(next=>{
      this.types=next;
    })
  }

  ngOnInit(): void {
  }
  validate1(control:AbstractControl):any{
    const date=new Date(control.value);
    let timeDiff = Math.abs(Date.now() - date.getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
    if (age<18){
      return{err1:true}
    }

  }
  submit(newForm: FormGroup) {
    if (!newForm.valid){
      alert("Error( you have not entered the data or the input data is wrong)");
    }
    if (newForm.valid){
      this.customerService.addNew(newForm.value).subscribe(next=>{
        this.route.navigateByUrl("/listCustomer")
      })
    }
  }
}
