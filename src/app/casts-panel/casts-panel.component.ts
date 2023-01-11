import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { Cast } from '../Models/Cast';
import { CastService } from '../services/cast-service.service';

@Component({
  selector: 'app-casts-panel',
  templateUrl: './casts-panel.component.html',
  styleUrls: ['./casts-panel.component.css']
})
export class CastsPanelComponent implements OnInit,OnDestroy{

  //initialize form reference with its fields
  form : FormGroup;
  imageData : string = '';

  private castsObservable = new Subject<Cast[]>();
  private castsSubscription : Subscription;

  //Model:
  casts : Cast[] = [];
  view = false;

  constructor(private _svc : CastService){}

  ngOnInit(): void {

    this.form = new FormGroup({
      Cname : new FormControl(null),
      Cdesc : new FormControl(null),
      Cnationality : new FormControl(null),
      image : new FormControl(null),
    });

    this._svc.getCasts()
    .subscribe(
       (res : any)=>{
        const casts : Cast[] = res;
        this.castsObservable.next(casts);
      }
    );

    this.castsSubscription = this.castsObservable.asObservable().subscribe(
      (casts : Cast[]) => {
      this.casts = casts;
      console.log('2');
      console.log(casts);
      }
    );

  }


  ngOnDestroy(){
    this.castsSubscription.unsubscribe();
  }


  onFileSelect(event : Event){
    //specify that this event received as html input element
    const file = (event.target as HTMLInputElement).files[0];
    const allowedMimeTypes = ["image/png","image/jpeg","image/jpg"];

    //patch value of specified control as file
    this.form.patchValue({image : file});

    if(file && allowedMimeTypes.includes(file.type)){
      const reader = new FileReader();
      //the arrow function will be executed after a certain file gets read by reader
      reader.onload = ()=>{
        this.imageData = reader.result as string;
      }

      reader.readAsDataURL(file);

    }

    
  }


  onSubmit(){
    console.log("submitted the image");
    const data = new FormData();
    const image = this.form.value.image;
    const Cname = this.form.value.Cname;
    const Cdesc = this.form.value.Cdesc;
    const Cnationality = this.form.value.Cnationality;
    data.append("image",image,image.name);
    data.append("Cname",Cname);
    data.append("Cdesc",Cdesc);
    data.append("Cnationality",Cnationality);
    this._svc.addcast(data);

    const cast = new Cast();
    cast.Cname = Cname;
    cast.Cdesc = Cdesc;
    cast.Cnationality = Cnationality;
    cast.Cimg = "http://localhost:5200/uploads/casts/"+image.filename;
    this.casts.push(cast);
    this.castsObservable.next(this.casts);

    //reset the form fields
    this.form.reset();
    this.imageData = null; 
  }




  /*viewCasts(){
    this.view = true;
  }*/


  onDelete(event : Cast){
    const index = this.casts.indexOf(event, 0);
    if (index > -1) {
      this.casts.splice(index, 1);
    }
  }



}
