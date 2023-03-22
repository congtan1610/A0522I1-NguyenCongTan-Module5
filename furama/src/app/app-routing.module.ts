import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditFacilitiesComponent} from "./edit-facilities/edit-facilities.component";
import {FacilitiesComponent} from "./facilities/facilities.component";


const routes: Routes = [
  {
    path: 'upFacilities',
    component: EditFacilitiesComponent
  }, {
    path: '',
    component: FacilitiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
