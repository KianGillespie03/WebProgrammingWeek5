import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movieList = [
    new Movie( 'Drive','2011','Nicolas Winding Refn' ),
    new Movie( 'La La Land','2016','Damien Chazelle' ),
    new Movie( 'The Nice Guys','2016','Shane Black' ),
    new Movie( 'The Big Short','2015','Adam McKay' )
  ];

  getMovies() {
    return this.movieList;
  }

  addMovie(movietitle:string, moviedirector:string, movieyear:string) {
    this.movieList.push({title:movietitle, director:moviedirector, year:movieyear});
  }

}
