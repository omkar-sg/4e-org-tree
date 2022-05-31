import { Component } from '@angular/core';

@Component({
  selector: 'ip-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'io';
  msg="from parent appComponent"
  child:string=''

  toparent(msg:string){
    this.child=msg
  }
}
