import { Injectable } from '@angular/core';
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers:Array<Customer>=[{
    id:1,
    address:'DN',
    dateOfBirth:'12/12/2001',
    email:'abc@gmail.com',
    gender:'Nam',
    idCard:'1232321321',
    name:'La A',
    phone:'9894337243',
    type:'Platinum'
  },{
    id:2,
    address:'DN',
    dateOfBirth:'12/12/2001',
    email:'abc@gmail.com',
    gender:'Nam',
    idCard:'1232321321',
    name:'La B',
    phone:'9894337243',
    type:'Platinum'
  }]
  constructor() { }
  getAll():Array<Customer>{
    return this.customers;
  }
}
