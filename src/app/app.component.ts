import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  showNavbar : boolean = true;

  constructor(private router : Router){
    this.router.events.subscribe( event => {
      if(event instanceof NavigationEnd){
        this.showNavbar = !event.url.includes('/admins');
      }
    });
  }

  ngOnInit(): void {
    
  }




  title = 'movieApp';
}
