import { Component, OnInit } from '@angular/core';
import { Bike } from '../bike';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {


  selectedBike: Bike;

  bikes: Bike[] = [
    {
      brand: "Royal Enfield Classic 500",
      model: 2019,
      image: 'https://cdn.pixabay.com/photo/2016/09/02/14/23/bike-rider-1639323__340.jpg',
      specs: 'Royal Enfield Classic 350 and Classic 500 are models of Royal Enfield motorcycles which have been in production since 2009. Both the Classic 350 and the Classic 500 feature the new unit construction engine in their 350cc and 500cc variants respectively.'
    },
    {
      
      brand: "duke",
      model: 2019,
      image: 'https://cdn.pixabay.com/photo/2017/03/07/16/16/supermoto-2124509__340.jpg',
      specs: 'About 200 Duke Specs and Features. KTM 200 Duke price starts at Rs.1.52 lakh (Ex-Showroom, Delhi) and the top end variant KTM 200 Duke ABS is priced at Rs. 1.62 lakh (Ex-Showroom, Delhi). Powering the KTM 200 Duke is a 200c single-cylinder engine.'
    },
    {
      brand: "Bazaz",
      model: 2019,
      image: 'https://cdn.pixabay.com/photo/2016/07/20/19/07/superbike-1531024__340.jpg',
      specs: 'Bajaj Auto Limited is among the oldest two-wheeler manufacturers in India. The company made its mark in the Indian two-wheeler space with geared scooters such as the Chetak, Priya and Super'
    }
    
  ]
  constructor() { }

  ngOnInit() {
  }
  sendBike(bike){
    this.selectedBike = bike;
  }

}
