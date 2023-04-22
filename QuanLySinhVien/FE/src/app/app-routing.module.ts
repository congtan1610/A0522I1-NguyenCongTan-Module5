import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from "./list/list.component";
import {EditComponent} from "./edit/edit.component";
import {AddComponent} from "./add/add.component";


const routes: Routes = [{
  path: '',
  component: ListComponent
}, {
  path: 'update/:id',
  component: EditComponent
}, {
  path: 'list',
  component: ListComponent
},
  {path:'add',
  component:AddComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
