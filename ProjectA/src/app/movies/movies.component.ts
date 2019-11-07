import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
  movies = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  searchMovie(search) {
    this.http.get<any>(`http://www.omdbapi.com/?s=${search}&apikey=290ddbe1`)
    .subscribe(data=> {
      this.movies = data.Search;
      console.log(this.movies); 
    })
  }

}
