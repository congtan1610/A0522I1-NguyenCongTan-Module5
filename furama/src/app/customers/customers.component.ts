import { Component, OnInit } from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerService} from "../service/customer.service";
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers:Array<Customer>=[];
  customerDel:Customer;
  constructor(private customerService:CustomerService) {
    this.customers=this.customerService.getAll();
  }
  ngOnInit(): void {
  }
  finById(id:number):Customer{
    return this.customers.filter(customer=>customer.id==id)[0];
  }
  deleteById(id: number) {
    this.customers.splice(this.customers.indexOf(this.finById(id)),1);
  }

  check(id: number) {
    this.customerDel=this.finById(id);
  }
}
