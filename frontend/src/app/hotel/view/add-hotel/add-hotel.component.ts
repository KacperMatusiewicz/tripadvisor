import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {HotelControllerService} from "../../controller/hotel-controller.service";
import {Hotel} from "../../model/hotel";

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  formGroup: FormGroup;
  hotelName: FormControl = new FormControl('');
  city: FormControl = new FormControl('');
  price: FormControl = new FormControl('');

  constructor(fb: FormBuilder, private hotelController: HotelControllerService) {
    this.formGroup = fb.group({
      hotelName: this.hotelName,
      city: this.city,
      price: this.price
    });
  }

  ngOnInit(): void {
  }

  addHotel() {
    this.hotelController.addHotel(new Hotel(this.hotelName.value, this.city.value, this.price.value, []));
  }
}
