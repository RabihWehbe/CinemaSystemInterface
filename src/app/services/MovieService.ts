import { HttpClient, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Movie } from "../Models/Movie";



@Injectable()
export class MovieService{

    readonly url = "http://localhost:5200/movies";
    movie : Movie = new Movie(); 
    private movies : Movie[] = [];
    private moviesSubject = new Subject<Movie[]>();

    constructor(private http : HttpClient){
        console.log("MovieService constructor");
    }

    addMovie(movie : Movie,image : File){
        const data = new FormData();
        data.append("image",image,image.name);
        data.append("Mname",movie.Mname);
        data.append("Mrate",movie.Mrate);
        data.append("Myear",movie.Myear);
        data.append("Mgenere",movie.Mgenere);
        this.http.post("http://localhost:5200/movies",data)
        .subscribe(
            (res : any)=>{
                movie._id = res._id;
                movie.Mimg = res.Mimg;
                this.movies.push(movie);
                this.moviesSubject.next(this.movies);
            }
            
        );
    }


    getMovies(){
        this.http.get(this.url).subscribe(
            (res : any)=>{
                this.movies = res;
                this.moviesSubject.next(this.movies);
            }
        );
    }

    getMoviesStream(){
        return this.moviesSubject.asObservable();
    }


    deleteCast(movie : Movie){
        const request = new HttpRequest('DELETE',this.url+"/"+movie._id);
        console.log(request.url); // logs the request URL
    
        this.http.request(request).subscribe(
            (res) => {
                /*const m = res['doc'];
                console.log(res);
                console.log(m);
                const movie : Movie = {
                    _id : m['_id'],
                    Mname : m['Mname'],
                    Mgenere : m['Mgenere'],
                    Mimg : m['Mimg'],
                    Mrate : m['Mrate'],
                    Myear : m['Myear']
                };*/
                console.log(movie);
                const index = this.movies.indexOf(movie, 0);
                if (index > -1) {
                this.movies.splice(index, 1);
                this.moviesSubject.next(this.movies);
                }
            });
    }

}