import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/Models/Movie';
import { MovieService } from 'src/app/services/MovieService';

@Component({
  selector: 'movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css']
})
export class MovieViewComponent {
  @Input() movie : Movie = new Movie();

  constructor(private _svc : MovieService){

  }

  delete(){
    this._svc.deleteCast(this.movie);
  }
}
