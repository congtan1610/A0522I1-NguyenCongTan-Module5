import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../service/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  newForm: FormGroup;
  types:string[];
  constructor(private customerService: CustomerService, private route: Router) {
    this.types=this.customerService.getType();
  }

  ngOnInit(): void {
    this.newForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      type: new FormControl('',[Validators.required]),
      dateOfBirth: new FormControl('',[Validators.required]),
      gender: new FormControl('',[Validators.required]),
      idCard: new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required])
    },[])
  }

  submit(newForm: FormGroup) {
    if (this.newForm.valid) {
      this.customerService.getAll().push(newForm.value);
      this.route.navigateByUrl('/listCustomer');
    }
  }
}
