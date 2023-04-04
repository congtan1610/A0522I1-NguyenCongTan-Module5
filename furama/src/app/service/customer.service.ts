import { Injectable } from '@angular/core';
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers:Array<Customer>=[{
    id:1,
    address:'DN',
    dateOfBirth:'2001-12-12',
    email:'abc@gmail.com',
    gender:'Nam',
    idCard:'1232321321',
    name:'La A',
    phone:'9894337243',
    type:'Platinum'
  },{
    id:2,
    address:'DN',
    dateOfBirth:'2001-12-12',
    email:'abc@gmail.com',
    gender:'Nam',
    idCard:'1232321321',
    name:'La B',
    phone:'9894337243',
    type:'Platinum'
  },{
    id:2,
    address:'DN',
    dateOfBirth:'2001-12-12',
    email:'abc@gmail.com',
    gender:'Nữ',
    idCard:'1232321321',
    name:'La C',
    phone:'9894337243',
    type:'Platinum'
  }];
  types:Array<string>=['Gold','Platinum','Silver','Member','Diamond'];
  constructor() { }
  getAll():Array<Customer>{
    return this.customers;
  }
  getType():Array<string>{
    return this.types;
  }
  findById(value:number){
    return this.customers.filter(customer=>(customer.id==value))[0];
  }
}
