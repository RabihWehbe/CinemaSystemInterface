import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Cast } from "../Models/Cast";
import { Movie } from "../Models/Movie";
import { MovieService } from "./MovieService";


@Injectable()
export class CMService implements OnDestroy{
    readonly url = "http://localhost:5200/casts-movies";

    //ideas:
    //movies : Movie[] = [];
    //casts : Cast[] = [];
    //private subscription : Subscription;

    constructor(private http : HttpClient/*ideas:,private _movieService : MovieService*/){
        console.log("CMService constructor");
        /*ideas:
        this._movieService.getMovies();
        this.subscription = this._movieService.getMoviesStream().
        subscribe(
            (movies : Movie[])=>{
                this.movies = movies;
            }
        );
        */
        
    }
    ngOnDestroy(): void {
        //ideas:
        //this.subscription.unsubscribe();
    }

    //function send list of values to the api
    sendCMList(){
        
    }


    getCastMovies(cid){
        return this.http.get(this.url + "/movies/"+cid);
    }

    getMovieCasts(mid){
        return this.http.get(this.url + "/casts/"+mid);
    }


}