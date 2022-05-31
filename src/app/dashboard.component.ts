import { Component, OnInit } from "@angular/core";
import { FormGroup,FormControl,Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Token } from "./token.service";

@Component({
    selector:'ip-dashboard',
    templateUrl:'./dashboard.component.html'
})

export class Dashboard implements OnInit{

    createapi=new FormGroup({

        apiname :new FormControl('',[Validators.required]),
        apidesc:new FormControl('',[Validators.required])

    })

    constructor(private tokenservice:Token, private router:Router ){}

    ngOnInit(): void {
        // if(!this.tokenservice.getToken() ){

        //     this.router.navigate(['/login'])

        // }

        // if(this.tokenservice.isTokenExpired()){
        //     this.router.navigate(['/login'])

        // }


    }


   

}