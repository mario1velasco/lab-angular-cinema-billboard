import { Movie } from './../../../shared/models/movie.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movies } from '../../../shared/data/sample-movies';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  movie:Movie;
  movies:Array<Movie>=movies;

  constructor(
    private routes: ActivatedRoute
  ) {   }

  ngOnInit() {
    // return this.movies;
    // return this.movies.find(contact => contact.id === id);
  }

}
