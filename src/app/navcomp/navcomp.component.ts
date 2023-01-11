import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navcomp',
  templateUrl: './navcomp.component.html',
  styleUrls: ['./navcomp.component.css']
})
export class NavcompComponent {

  constructor(private router : Router){

  }


  goToCasts(){
    this.router.navigate(['admins/casts-panel']);
  }

  goToMovies(){
    this.router.navigate(['admins/movies-panel']);
  }

  goToMCs(){
    this.router.navigate(['admins/movies-casts']);
  }
}
