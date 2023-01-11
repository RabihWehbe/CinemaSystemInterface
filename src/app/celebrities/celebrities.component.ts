import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cast } from '../Models/Cast';
import { CastService } from '../services/cast-service.service';
import { CelebBindService } from '../services/CelebrityBindingService';

@Component({
  selector: 'app-celebrities',
  templateUrl: './celebrities.component.html',
  styleUrls: ['./celebrities.component.css']
})
export class CelebritiesComponent implements OnInit{

  casts : Cast[] = [];

  constructor(private celebService : CelebBindService,private router : Router,private castService : CastService){

  }


  directToDetails(cast : Cast){
    this.celebService.cast = cast;
    this.router.navigate(['celebrities/celebrityDetails']);
  }

  ngOnInit(): void {
    this.castService.getCasts()
      .subscribe(
        (res : any)=>{
          this.casts = res;
        }
      );
  }

}

/*class Celeb{
  name : string = 'Rayan Gossling';
  nationality : string = 'USA';
  desc : string = 'A very talanted actor who stares in many movies and serieses and also played very important role in making cinema progress in general';
  img : string = 'assets/images/uploads/ceb29.jpg'; 
}*/
