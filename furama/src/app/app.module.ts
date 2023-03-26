import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NagivationComponent } from './nagivation/nagivation.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { EditFacilitiesComponent } from './edit-facilities/edit-facilities.component';
import { CreateFacilitiesComponent } from './create-facilities/create-facilities.component';
import { CustomersComponent } from './customers/customers.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { ContractsComponent } from './contracts/contracts.component';
import { CreateContractComponent } from './create-contract/create-contract.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NagivationComponent,
    FacilitiesComponent,
    EditFacilitiesComponent,
    CreateFacilitiesComponent,
    CustomersComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    ContractsComponent,
    CreateContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
