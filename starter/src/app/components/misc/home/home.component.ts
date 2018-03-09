import { MovieService } from './../../../shared/services/movie.service';
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
    private router:Router,
    private movieService:MovieService
  ) { }

  ngOnInit() {
    this.movies=this.movieService.getMovies();
  }
  showMovie(id:number):void{
    this.router.navigate(['/movies',id]);
  }

}
