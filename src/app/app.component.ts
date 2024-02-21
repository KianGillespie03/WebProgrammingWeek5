import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieService } from './movie.service';

import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AddMovieComponent} from './add-movie/add-movie.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { Movie } from './movie.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AddMovieComponent, ListMoviesComponent, MovieDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-list';

  public mySelectedMovie!:Movie;

  setSelectedMovie(movie:Movie) {
    this.mySelectedMovie=movie;
  }

  movies:any[]=[];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movies = this.movieService.getMovies();
    console.log(this.movies);
  }
}
