import { MovieService } from './shared/services/movie.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/misc/home/home.component';
import { MovieComponent } from './components/misc/movie/movie.component';
import { routes } from './app.routes';
import { MovieItemComponent } from './components/movie/movie-item/movie-item.component';
import { NavbarComponent } from './components/misc/navbar/navbar.component';
import { FooterComponent } from './components/misc/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    MovieItemComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
