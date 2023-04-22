import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../service/customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TypeCus} from "../model/type-cus";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  editForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required]),
    typeCus: new FormControl(null, [Validators.required]),
    dateOfBirth: new FormControl('', [Validators.required, this.validate1]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required])
  });
  types: TypeCus[];

  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute,private route:Router) {
    this.customerService.getTypeCus().subscribe(next => {
      this.types = next
    })
    this.activatedRoute.paramMap.subscribe(next => {
      const id = parseInt(next.get('id'));
      if (id != null) {
        this.customerService.findById(id).subscribe(next=>{
          this.editForm.patchValue(next);
        })
      }
    })
  }

  ngOnInit(): void {
  }
  compare(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  submit(editForm: FormGroup) {
    if (!editForm.valid){
      alert("Error( you have not entered the data or the input data is wrong)");
    }
    if (this.editForm.valid) {
        this.customerService.putById(editForm.value).subscribe(next=>{
          this.route.navigateByUrl("/listCustomer");
        })
    }
  }
  validate1(control:AbstractControl):any {
    const date = new Date(control.value);
    let timeDiff = Math.abs(Date.now() - date.getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
    if (age < 18) {
      return {err1: true}
    }
  }
  }
