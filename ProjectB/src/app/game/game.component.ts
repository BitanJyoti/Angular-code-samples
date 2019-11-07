import { Component, OnInit } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  selectedGame: Game;
  games: Game[] = [
    {
      brand: "Chess",
      model: 2019,
      image: 'https://cdn.pixabay.com/photo/2017/09/08/20/29/chess-2730034__340.jpg',
      specs: 'Royal Enfield Classic 350 and Classic 500 are models of Royal Enfield motorcycles which have been in production since 2009. Both the Classic 350 and the Classic 500 feature the new unit construction engine in their 350cc and 500cc variants respectively.'
    },
    {
      
      brand: "Football",
      model: 2019,
      image: 'https://cdn.pixabay.com/photo/2016/11/29/02/05/audience-1866738__340.jpg',
      specs: 'About 200 Duke Specs and Features. KTM 200 Duke price starts at Rs.1.52 lakh (Ex-Showroom, Delhi) and the top end variant KTM 200 Duke ABS is priced at Rs. 1.62 lakh (Ex-Showroom, Delhi). Powering the KTM 200 Duke is a 200c single-cylinder engine.'
    },
    {	
      brand: "Cards",
      model: 2019,
      image: 'https://cdn.pixabay.com/photo/2014/08/12/20/06/letters-416960__340.jpg',
      specs: 'Bajaj Auto Limited is among the oldest two-wheeler manufacturers in India. The company made its mark in the Indian two-wheeler space with geared scooters such as the Chetak, Priya and Super'
    }
    
  ]
  constructor() { }

  ngOnInit() {
  }
  sendGame(game){
    this.selectedGame = game;
  }

}
