import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CmModel } from '../Models/CMModel';
import { CMService } from '../services/CMService';

@Component({
  selector: 'app-movies-casts',
  templateUrl: './movies-casts.component.html',
  styleUrls: ['./movies-casts.component.css']
})
export class MoviesCastsComponent implements OnInit{
  cmsList = [0];
  CMs : CmModel[] = [];
  Cnames : string[] = [];
  Mnames : string[] = [];

  checkers = [];

  constructor(private http: HttpClient/*,private _svc : CMService*/) {}

  ngOnInit(): void {
    
  }

  addMovieCasts(){
    let index = this.cmsList.length -1;
    console.log(index);
    this.cmsList.push(this.cmsList.length);
    const cmModel = new CmModel();
    cmModel.Cname = this.Cnames[index];
    cmModel.Mname = this.Mnames[index];
    this.CMs.push(cmModel);
  }
  
  sendRecords() {
    this.http.post('http://localhost:5200/casts-movies', this.CMs)
    .subscribe(
      (response) => {
        this.checkers = response['ack'];
        if(this.checkers.length > 0){
          console.log(this.checkers);
        }
        
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
