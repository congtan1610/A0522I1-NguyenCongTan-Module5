import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RatingBarComponentComponent } from './rating-bar-component/rating-bar-component.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SimpleLoginComponent } from './simple-login/simple-login.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingBarComponentComponent,
    CountdownTimerComponent,
    RegisterComponent,
    SimpleLoginComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
