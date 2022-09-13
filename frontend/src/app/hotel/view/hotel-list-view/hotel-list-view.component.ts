import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Hotel} from "../../model/hotel";
import {HotelModelService} from "../../model/hotel-model.service";

@Component({
  selector: 'app-hotel-view',
  templateUrl: './hotel-list-view.component.html',
  styleUrls: ['./hotel-list-view.component.css']
})
export class HotelListViewComponent implements OnInit, AfterViewInit {

  hotels: Hotel[] = []

  constructor(private hotelModel: HotelModelService) {

  }

  ngOnInit(): void {
    this.hotelModel.hotelsSubject.subscribe(
      (hotels: Hotel[]) => this.hotels = hotels
    );
  }

  ngAfterViewInit(): void {

  }

}
