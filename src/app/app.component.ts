import { Component } from '@angular/core';
import { Token } from './token.service';

@Component({
  selector: 'ip-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'io';
  msg="from parent appComponent"
  child:string=''

  constructor(private tokenservice:Token){

  }

  toparent(msg:string){
    this.child=msg
  }

  isExpired(){
     return this.tokenservice.isTokenExpired()
    // return false
  }
}
