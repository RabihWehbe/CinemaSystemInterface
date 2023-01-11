import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Movie } from '../Models/Movie';
import { MovieService } from '../services/MovieService';

@Component({
  selector: 'app-movies-panel',
  templateUrl: './movies-panel.component.html',
  styleUrls: ['./movies-panel.component.css']
})
export class MoviesPanelComponent implements OnInit,OnDestroy{
  form : FormGroup;
  imageData : string = '';
  private moviesSubscription : Subscription;

  movies : Movie[] = [];

  constructor(private _svc : MovieService){
    console.log("Movie comp constructor");
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      Mname : new FormControl(null),
      Mgenere : new FormControl(null),
      Mrate : new FormControl(null),
      Myear : new FormControl(null),
      image : new FormControl(null),
    });

    console.log("movie OnInit");
    this._svc.getMovies();
    this.moviesSubscription = this._svc
    .getMoviesStream()
    .subscribe(
      /* the current data of observable,that could be changed at any time for any operation,like insert delete*/
      (movies : Movie[])=>{
        //what will be changed in data of observer based on change of observable
        //in our case it will take reference to the collection of observer.
        this.movies = movies;
      }
    );
  }

  ngOnDestroy(): void {
    this.moviesSubscription.unsubscribe();
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
    const image = this.form.value.image;
    const Mname = this.form.value.Mname;
    const Mgenere = this.form.value.Mgenere;
    const Mrate = this.form.value.Mrate;
    const Myear = this.form.value.Myear;;

    const movie = new Movie();
    movie.Mname = Mname;
    movie.Mgenere = Mgenere;
    movie.Mrate = Mrate;
    movie.Myear = Myear;

    this._svc.addMovie(movie,image);

    
    //reset the form fields
    this.form.reset();
    this.imageData = null;
  }


}
