import { Component, OnInit } from '@angular/core';
import {Contract} from "../model/contract";
import {ContractService} from "../service/contract.service";

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {
  contracts:Array<Contract>=[];
  constructor(private contractService:ContractService) {
    this.contracts=this.contractService.getAll();
  }

  ngOnInit(): void {
  }

}
