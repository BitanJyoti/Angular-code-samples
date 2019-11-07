import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  selectedMovie: Movie;

  movies: Movie[] = [
    {
      brand: "Tradition",
      model: 2019,
      image: 'https://cdn.pixabay.com/photo/2015/01/11/09/19/film-596009__340.jpg',
      specs: 'Royal Enfield Classic 350 and Classic 500 are models of Royal Enfield motorcycles which have been in production since 2009. Both the Classic 350 and the Classic 500 feature the new unit construction engine in their 350cc and 500cc variants respectively.'
    },
    {
      
      brand: "Joker",
      model: 2019,
      image: 'https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070__340.jpg',
      specs: 'About 200 Duke Specs and Features. KTM 200 Duke price starts at Rs.1.52 lakh (Ex-Showroom, Delhi) and the top end variant KTM 200 Duke ABS is priced at Rs. 1.62 lakh (Ex-Showroom, Delhi). Powering the KTM 200 Duke is a 200c single-cylinder engine.'
    },
    {	
      brand: "Ticket",
      model: 2019,
      image: 'https://cdn.pixabay.com/photo/2017/11/24/10/43/admission-2974645__340.jpg',
      specs: 'Bajaj Auto Limited is among the oldest two-wheeler manufacturers in India. The company made its mark in the Indian two-wheeler space with geared scooters such as the Chetak, Priya and Super'
    }
    
  ]

  constructor() { }

  ngOnInit() {
  }
  sendMovie(movie){
    this.selectedMovie = movie;
  }


}
