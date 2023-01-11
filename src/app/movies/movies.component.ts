import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from '../Models/Movie';
import { MovieService } from '../services/MovieService';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{
  movies : Movie[] = [];

  private moviesSubscription : Subscription;

  constructor(private _svc : MovieService){

  }

  ngOnInit(): void {
    this._svc.getMovies();
    this.moviesSubscription = this._svc.
    getMoviesStream()
    .subscribe(
      (movies : Movie[])=>{
        this.movies = movies;
      }
    )
  }
}
