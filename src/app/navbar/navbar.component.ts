import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  username : string = '';
  password : string = '';
  message : string = '';
  ackresult : any;
  constructor(private caller : HttpClient,private router: Router,private cookieService : CookieService){
  }


  capitalizeFirstLetter(str: string): string {
    return str.substring(0, 1).toUpperCase() + str.substring(1);
  }

  login(adminModelForm : NgForm){
    

    if(!adminModelForm.invalid){
      const body = {Aname : this.capitalizeFirstLetter(this.username),Apassword : this.capitalizeFirstLetter(this.password)}
      this.caller.post('http://localhost:5200/admins/authenticate',body)
      .subscribe((response:any) =>{
        if(response['ack'] == true){
          let expDate = new Date();
          expDate.setDate(expDate.getDate() + 1);
          /*
          setting a cookie with the same name on a different client side will not override the values in other client side.
          Cookies are specific to the client that set them, so a cookie set on one client will not be visible or accessible from another client.
          */
          this.cookieService.set('ack',JSON.stringify(response),expDate);
          this.cookieService.set('Aname',this.username,expDate);
          this.router.navigate(['admins']);
        }
        else{
          console.log(response['ack']);
        }
      }
      );
    }
  }
}
