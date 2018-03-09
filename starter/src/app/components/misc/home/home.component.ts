import { movies } from './../../../shared/data/sample-movies';
import { Movie } from './../../../shared/models/movie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies:Array<Movie>=[];

  constructor() { }

  ngOnInit() {
    this.movies=movies;
  }

}
