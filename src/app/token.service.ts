import { Injectable } from "@angular/core";
import jwt_decode from "jwt-decode";

@Injectable()

export class Token{

    rememberMe=false

    saveToken(token:any){
        // console.log(token)
        
          //JSON.stringify(token)
        if(this.rememberMe){
            console.log('from sve token if')
            localStorage.setItem('token',token.response)
        }

        else{
            sessionStorage.setItem('token',token.response)

        }
       
    }

    getToken(){

        if(localStorage.getItem('token')!=null){
            return localStorage.getItem('token')
        }
        
        return sessionStorage.getItem('token')
    }

    isTokenExpired() {

        let tk:any=this.getToken()
        

        if(tk){
            tk=jwt_decode(tk as string)
            const expiry =tk.exp
            //const expiry = (JSON.parse(atob(tk!.split('.')[1]))).exp;
            return (Math.floor((new Date).getTime() / 1000)) >= expiry;

        }

        // console.log((JSON.parse(atob(tk!.split('.')[1]))).exp)
        return true  
    
    
    }



    signout(){
        
        sessionStorage.clear()
        localStorage.clear()
    }

    remMe(){
        this.rememberMe=true
        // localStorage.setItem('token',this.getToken() as string)
    }

}