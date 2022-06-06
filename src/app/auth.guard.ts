import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Token } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private tokenservice:Token, private router:Router){}
  canActivate(){

      if(!this.tokenservice.isTokenExpired()){return true}
      this.router.navigate(['/login'])
      return false


    
  }
  
}
