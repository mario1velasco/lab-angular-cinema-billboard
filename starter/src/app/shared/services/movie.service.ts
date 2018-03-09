import { Movie } from './../models/movie.model';
import { Injectable } from '@angular/core';
import { movies } from '../data/sample-movies';

@Injectable()
export class MovieService {
  movies:Array<Movie>=movies;

  constructor() { }

  listMovies(): Array<Movie> {
    return this.movies;
  }
}
