import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerService} from "../service/customer.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];
  customerDel: Customer;
  mess: string;
  Search: FormGroup = new FormGroup({
    name: new FormControl()
  })
  p: number;

  constructor(private customerService: CustomerService, private route: Router) {
    this.customerService.getAll().subscribe(next => {
      this.customers = next;
      console.log(next)
    })
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.Search.valid) {
      if (this.Search.value.name == null) {
        return this.customers
      } else {
        this.customerService.findByName(this.Search.value.name).subscribe(next => {
          if (next.length != 0) {
            this.customers = next;
            this.mess = null;
          } else {
            this.mess = "Not found by " + this.Search.value.name;
            this.customers = []
          }
        })
      }
    }
  }

  edit(id: number) {
  this.route.navigateByUrl('/updateCustomer/'+id);
  }

  check(id: number) {
    this.customerService.findById(id).subscribe(next=>{
      this.customerDel=next;
    })
  }

  deleteById(id: number) {
    this.customerService.delete(id).subscribe(next=>{
      alert("Delete success");
      location.reload();
    });
  }
}
