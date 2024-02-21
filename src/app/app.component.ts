import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AddMovieComponent } from './add-movie/add-movie.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { MovieService } from './movie.service';
import { Movie } from './movie.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AddMovieComponent, ListMoviesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Week 5 movie-list';

  movies:any[]=[];

  constructor(private movieService:MovieService) {}

  ngOnInIt() {
    this.movies=this.movieService.getMovies();
    console.log(this.movies);
  }

  public mySelectedMovie!:Movie;

  setSelectedMovie(movie:Movie) {
    this.mySelectedMovie=movie;
  }
}
