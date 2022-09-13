import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Hotel} from "../model/hotel";
import {HotelModelService} from "../model/hotel-model.service";

@Injectable({
  providedIn: 'root'
})
export class HotelControllerService {

  constructor(private httpClient: HttpClient, private model: HotelModelService) { }


  refreshHotels() {
    this.httpClient.get<Hotel[]>("http://localhost:8080/api/hotel").subscribe(
      (response: Hotel[]) => this.model.updateHotels(response)
    );
  }
  addHotel(hotel: Hotel) {
    this.httpClient.post<Hotel>("http://localhost:8080/api/hotel", hotel).subscribe(
      () => {
        this.model.hotels.push(hotel);
        this.model.updateViews();
      }
    );
  }

}
