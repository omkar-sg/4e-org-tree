import { Injectable } from "@angular/core";
import { window } from "rxjs";

@Injectable()

export class Token{

    saveToken(token:any){
        console.log(token)
        localStorage.removeItem('token')
        localStorage.setItem('token',token.response)  //JSON.stringify(token)
    }

    getToken(){
        return localStorage.getItem('token')
    }

    isTokenExpired() {

        let tk=this.getToken()

        console.log((JSON.parse(atob(tk!.split('.')[1]))).exp)
        const expiry = (JSON.parse(atob(tk!.split('.')[1]))).exp;
    
    
    
        //console.log((Math.floor((new Date).getTime() / 1000)) >= expiry)
    
        return (Math.floor((new Date).getTime() / 1000)) >= expiry;
    
    
    
      }

    signout(){
        localStorage.clear()
    }

}