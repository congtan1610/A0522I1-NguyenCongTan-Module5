import {TypeCus} from "./type-cus";

export interface Customer {
  id:number,
  name:string,
  dateOfBirth:string,
  gender:string,
  idCard:string,
  phone:string,
  email:string,
  typeCus:TypeCus,
  address:string
}
