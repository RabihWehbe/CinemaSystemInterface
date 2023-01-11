import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  movies : MovieItem[] = [];

  ngOnInit(): void {
    let mi = new MovieItem();
    mi.genere = 'comedy';
    mi.name = 'The big Leboski';
    mi.rate = '9.7';

    this.movies.push(mi);

    mi = new MovieItem();
    mi.genere = 'drama';
    mi.name = 'AfterMath';
    mi.rate = '7.7';

    this.movies.push(mi);

    mi = new MovieItem();
    mi.genere = 'scifi';
    mi.name = 'Avatar';
    mi.rate = '8.7';

    this.movies.push(mi);


    mi = new MovieItem();

    this.movies.push(mi);

    mi = new MovieItem();

    this.movies.push(mi);

    mi = new MovieItem();

    this.movies.push(mi);

    mi = new MovieItem();

    this.movies.push(mi);

    mi = new MovieItem();

    this.movies.push(mi);
  }


  title = 'Home';
}


class MovieItem{
  genere: string = 'action';
  name: string = 'The Revenant';

  rate : string = '6.5';

  img : string = 'assets/images/uploads/slider2.jpg';
}
