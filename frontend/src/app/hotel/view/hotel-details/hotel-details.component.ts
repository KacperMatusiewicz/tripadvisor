import { Component, OnInit } from '@angular/core';
import {HotelModelService} from "../../model/hotel-model.service";
import {ActivatedRoute} from "@angular/router";
import {Hotel} from "../../model/hotel";

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

  hotel: Hotel;
  constructor(private hotelModel: HotelModelService, route: ActivatedRoute) {
    let hotelId: number = Number.parseInt(<string>route.snapshot.paramMap.get('id'));
    // @ts-ignore
    this.hotel = hotelModel.hotels.find((hotel: Hotel)=> hotel.id === hotelId);
  }

  ngOnInit(): void {
  }

}
