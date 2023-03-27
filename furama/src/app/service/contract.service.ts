import { Injectable } from '@angular/core';
import {Contract} from "../model/contract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contracts:Array<Contract>=[{
    id:1,
    deposit:123213,
    endDay:'12/12/2001',
    startDay:'11/12/2001',
    total:12312321331
  }];
  constructor() { }
  getAll():Array<Contract>{
    return this.contracts;
  }
}
