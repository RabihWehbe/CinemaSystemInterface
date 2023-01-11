import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../Models/Movie';
import { MovieService } from '../services/MovieService';



@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{

  @Input() movie : Movie;

  constructor(private svc : MovieService,private router : Router){
  }

  ngOnInit(): void {

  }

  goToDetails(){
    this.svc.movie = this.movie;
    this.router.navigate(["movies/movieDetails"]);
  }

}
