import { Component, OnInit } from "@angular/core";
import { FormGroup,FormControl,Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Token } from "./token.service";

@Component({
    selector:'ip-navbar',
    templateUrl:'./navbar.component.html'
})

export class Navbar implements OnInit{


    constructor(private tokenservice:Token, private router:Router ){}

    ngOnInit(): void {
        // if(!this.tokenservice.getToken() ){

        //     this.router.navigate(['/login'])

        // }

        // if(this.tokenservice.isTokenExpired()){
        //     this.router.navigate(['/login'])

        // }


    }


    signout(){
        this.tokenservice.signout()

    }

}