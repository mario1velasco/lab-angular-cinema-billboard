import {  MovieComponent} from './components/misc/movie/movie.component';
import {  HomeComponent} from './components/misc/home/home.component';
import {  Routes} from '@angular/router';

export const routes: Routes = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'movie',
    component: MovieComponent
  }
];
