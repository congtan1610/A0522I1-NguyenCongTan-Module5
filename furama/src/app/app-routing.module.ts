import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditFacilitiesComponent} from "./edit-facilities/edit-facilities.component";
import {FacilitiesComponent} from "./facilities/facilities.component";
import {CreateFacilitiesComponent} from "./create-facilities/create-facilities.component";
import {CustomersComponent} from "./customers/customers.component";


const routes: Routes = [
  {
    path: 'upFacilities',
    component: EditFacilitiesComponent
  }, {
    path: '',
    component: FacilitiesComponent
  }, {
    path: 'createFacilities',
    component: CreateFacilitiesComponent
  }, {
    path: 'listCustomer',
    component: CustomersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
