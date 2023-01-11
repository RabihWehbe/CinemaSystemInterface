import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CastService{

  constructor(private http: HttpClient) { }


  addcast(data : FormData){
    this.http.post("http://localhost:5200/casts",data)
    .subscribe((res) => {console.log(JSON.stringify(res))});
  }

  getCasts(){
    return this.http.get("http://localhost:5200/casts");
  }


  getCast(id : string){
    const params = new HttpParams();
    params.set('id',id);
    return this.http.get("http://localhost:5200/casts",{params});
  }

  deleteCast(id : string){
    /*const params = new HttpParams();
    params.set('id',id);
    console.log(id);
    this.http.delete("http://localhost:5200/casts",{params}).subscribe(res => console.log(res));*/

    const request = new HttpRequest('DELETE', `http://localhost:5200/casts/${id}`);
    console.log(request.url); // logs the request URL

    this.http.request(request).subscribe(res => {
      console.log(res);
    });
  }

}
