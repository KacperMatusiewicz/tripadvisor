import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Hotel} from "./hotel";

@Injectable({
  providedIn: 'root'
})
export class HotelModelService {

  hotels: Hotel[] = [];

  hotelsSubject: BehaviorSubject<Hotel[]> = new BehaviorSubject<Hotel[]>(this.hotels);

  constructor() {
  }

  updateHotels(hotels: Hotel[]) {
    this.hotels = hotels;
    this.updateViews();
  }

  updateViews() {
    this.hotelsSubject.next(this.hotels);
  }
}
