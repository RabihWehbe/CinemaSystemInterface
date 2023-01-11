import { Component, OnInit } from '@angular/core';
import { Cast } from '../Models/Cast';
import { Movie } from '../Models/Movie';
import { CelebBindService } from '../services/CelebrityBindingService';
import { CMService } from '../services/CMService';

@Component({
  selector: 'celebrity-details',
  templateUrl: './celebrity-details.component.html',
  styleUrls: ['./celebrity-details.component.css']
})
export class CelebrityDetailsComponent implements OnInit{

  cast : Cast = new Cast();
  myMovies : Movie[] = [];


  constructor(private celebSvc : CelebBindService,private _svc : CMService){

  }
  ngOnInit(): void {
  // this.name = this.celebSvc.celebrity.name;
  // this.desc = this.celebSvc.celebrity.desc;
  // this.nationality = this.celebSvc.celebrity.nationality;
  // let path = '../../';
  // this.img = path.concat(this.celebSvc.celebrity.img);

  this.cast = this.celebSvc.cast;
  this._svc.getCastMovies(this.cast._id)
  .subscribe(
    (res : any)=>{
      this.myMovies = res;
    }
  )
  }

}
