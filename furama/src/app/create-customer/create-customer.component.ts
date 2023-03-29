import {FormControl, FormGroup} from "@angular/forms";
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
      name: new FormControl(''),
      type: new FormControl(''),
      dateOfBirth: new FormControl(''),
      gender: new FormControl(''),
      idCard: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl('')
    },[])
  }

  submit(newForm: FormGroup) {
    if (this.newForm.value) {
      this.customerService.getAll().push(newForm.value);
      this.route.navigateByUrl('/listCustomer');
    }
  }
}
