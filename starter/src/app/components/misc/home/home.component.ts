import { movies } from './../../../shared/data/sample-movies';
import { Movie } from './../../../shared/models/movie.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies:Array<Movie>=[];

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    this.movies=movies;
  }
  showMovie(id:number):void{
    this.router.navigate(['/movies',id]);
  }

}
