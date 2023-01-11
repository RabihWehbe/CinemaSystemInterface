import { Component, OnInit } from '@angular/core';
import { Cast } from '../Models/Cast';
import { Movie } from '../Models/Movie';
import { CMService } from '../services/CMService';
import { MovieService } from '../services/MovieService';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{

  movie : Movie = new Movie();
  myCasts : Cast[] = [];

  constructor(private svc : MovieService,private _cmsvc : CMService){
    
  }

  ngOnInit(): void {
    this.movie = this.svc.movie;
    this._cmsvc.getMovieCasts(this.movie._id).
    subscribe(
      (res : any)=>{
        this.myCasts = res;
      }
    )
  }

}
