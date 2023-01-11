import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cast } from '../Models/Cast';

@Component({
  selector: 'celebrity',
  templateUrl: './celebrity.component.html',
  styleUrls: ['./celebrity.component.css']
})
export class CelebrityComponent implements OnInit{
  @Input() cast : Cast = new Cast();

  //BM : BindingModel = new BindingModel();



  @Output() CastEvent = new EventEmitter<Cast>();


  constructor(){
    
  }
  ngOnInit(): void {
    // this.BM.name = this.name;
    // this.BM.img = this.img;
    // this.BM.desc = this.desc;
    // this.BM.nationality = this.nationality;
  }

  goToDetails(){
    this.CastEvent.emit(this.cast);
  }
}

// export class BindingModel{
//   name = '';
//   nationality = '';
//   desc = '';
//   img = '';
// }