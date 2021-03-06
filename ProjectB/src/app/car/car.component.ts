import { Component, OnInit } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  selectedCar: Car;

  cars: Car[] = [
    {
      brand: "ZEEP",
      model: 2019,
      image: 'https://image.shutterstock.com/image-photo/cars-sale-stock-row-car-260nw-636632101.jpg',
      specs: 'Royal Enfield Classic 350 and Classic 500 are models of Royal Enfield motorcycles which have been in production since 2009. Both the Classic 350 and the Classic 500 feature the new unit construction engine in their 350cc and 500cc variants respectively.'
    },
    {
      
      brand: "Tata",
      model: 2019,
      image: 'https://image.shutterstock.com/image-photo/cars-sale-automotive-industry-dealership-260nw-749118631.jpg',
      specs: 'About 200 Duke Specs and Features. KTM 200 Duke price starts at Rs.1.52 lakh (Ex-Showroom, Delhi) and the top end variant KTM 200 Duke ABS is priced at Rs. 1.62 lakh (Ex-Showroom, Delhi). Powering the KTM 200 Duke is a 200c single-cylinder engine.'
    },
    {
      brand: "Marcedes",
      model: 2019,
      image: 'https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278__340.jpg',
      specs: 'Bajaj Auto Limited is among the oldest two-wheeler manufacturers in India. The company made its mark in the Indian two-wheeler space with geared scooters such as the Chetak, Priya and Super'
    }
    
  ]

  constructor() { }

  ngOnInit() {
  }
  sendCar(car){
    this.selectedCar = car;
  }


}
