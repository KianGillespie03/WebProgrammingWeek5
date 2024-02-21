import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movieList = [
    new Movie('The GodFather','1972','Francis Ford Coppola'),
    new Movie('Millers Crossing','1990','The Coen Brothers'),
    new Movie( 'Dial M for Murder','1954','Alfred Hitchcock'),
    new Movie('Whiplash','2014','Damien Chazelle')
  ];

  getMovies() {
    return this.movieList;
  }

  addMovie(movietitle:string, moviedirector:string, movieyear:string) {
    this.movieList.push({title:movietitle, director:moviedirector, year:movieyear});
  }
}

