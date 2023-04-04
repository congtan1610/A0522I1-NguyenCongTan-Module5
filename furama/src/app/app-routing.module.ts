import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditFacilitiesComponent} from "./edit-facilities/edit-facilities.component";
import {FacilitiesComponent} from "./facilities/facilities.component";
import {CreateFacilitiesComponent} from "./create-facilities/create-facilities.component";
import {CustomersComponent} from "./customers/customers.component";
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {UpdateCustomerComponent} from "./update-customer/update-customer.component";
import {ContractsComponent} from "./contracts/contracts.component";
import {CreateContractComponent} from "./create-contract/create-contract.component";


const routes: Routes = [
  {
    path: 'upFacilities/:id',
    component: EditFacilitiesComponent
  }, {
    path: '',
    component: FacilitiesComponent
  }, {
    path: 'listFacilities',
    component: FacilitiesComponent
  }, {
    path: 'createFacilities',
    component: CreateFacilitiesComponent
  }, {
    path: 'listCustomer',
    component: CustomersComponent
  }, {
    path: 'createCustomer',
    component: CreateCustomerComponent
  }, {
    path: 'updateCustomer/:id',
    component: UpdateCustomerComponent
  }, {
    path: 'listContract',
    component: ContractsComponent
  }, {
    path: 'createContract',
    component: CreateContractComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
