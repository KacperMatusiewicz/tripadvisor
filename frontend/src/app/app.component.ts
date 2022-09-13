import {Component, OnInit} from '@angular/core';
import {HotelControllerService} from "./hotel/controller/hotel-controller.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  constructor(private hotelController: HotelControllerService, private router: Router) {
  }

  ngOnInit(): void {
    this.hotelController.refreshHotels();
  }

  navigateToHotelList() {
    this.router.navigate(["hotels"]);
  }

  navigateToHotelForm() {
    this.router.navigate(["add-hotel"]);
  }
}
