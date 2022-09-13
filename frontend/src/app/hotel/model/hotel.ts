export class Hotel {

  id?: number;
  name: string;
  city: string;
  price: number;
  reviews: any[] = [];


  constructor(name: string, city: string, price: number, reviews: any[]) {
    this.name = name;
    this.city = city;
    this.price = price;
    this.reviews = reviews;
  }
}
