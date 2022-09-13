import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RoutingModule} from "./routing.module";
import {HotelListViewComponent} from "./hotel/view/hotel-list-view/hotel-list-view.component";
import {AddHotelComponent} from "./hotel/view/add-hotel/add-hotel.component";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {HotelDetailsComponent} from "./hotel/view/hotel-details/hotel-details.component";

@NgModule({
  declarations: [
    AppComponent,
    HotelListViewComponent,
    AddHotelComponent,
    HotelDetailsComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
