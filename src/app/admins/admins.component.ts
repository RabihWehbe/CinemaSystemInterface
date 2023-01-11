import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit{

  name : string = '';

  constructor(private router : Router,private cookieService : CookieService){
    
  }
  ngOnInit(): void {
    if(!this.cookieService.check('ack')){
      this.router.navigate(['']);
    }

    const objct = JSON.parse(this.cookieService.get('ack'));

    const res = objct.ack;
    if(res == true){
      this.name = this.cookieService.get('Aname');
    }
  }



  logout(){
    this.cookieService.delete('ack');
    this.router.navigate(['']);
  }

}
