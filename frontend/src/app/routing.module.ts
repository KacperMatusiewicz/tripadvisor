import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HotelListViewComponent} from "./hotel/view/hotel-list-view/hotel-list-view.component";
import {AddHotelComponent} from "./hotel/view/add-hotel/add-hotel.component";
import {HotelDetailsComponent} from "./hotel/view/hotel-details/hotel-details.component";

const routes: Routes = [
  {
    path: "hotels",
    component: HotelListViewComponent
  },
  {
    path: "add-hotel",
    component: AddHotelComponent
  },
  {
    path: "hotels/:id",
    component: HotelDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
