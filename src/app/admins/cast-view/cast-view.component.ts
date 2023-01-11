import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cast } from 'src/app/Models/Cast';
import { CastService } from 'src/app/services/cast-service.service';

@Component({
  selector: 'cast-view',
  templateUrl: './cast-view.component.html',
  styleUrls: ['./cast-view.component.css']
})
export class CastViewComponent {
  @Input() cast : Cast = new Cast();

  @Output() isdeleted = new EventEmitter<Cast>();

  constructor(private _svc : CastService){

  }

  delete(){
    this._svc.deleteCast(this.cast._id);
    this.isdeleted.emit(this.cast);
  }
}
