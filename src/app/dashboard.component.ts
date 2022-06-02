import { Component, OnInit } from "@angular/core";
import { FormGroup,FormControl,Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Data } from "./data.service";
import { Token } from "./token.service";
import { formatDate } from "@angular/common";

@Component({
    selector:'ip-dashboard',
    templateUrl:'./dashboard.component.html',
    
})

export class Dashboard implements OnInit{
    

    kpilist:any=[]
    id:any;

    createapi=new FormGroup({

        apiname :new FormControl('',[Validators.required]),
        apidesc:new FormControl('',[Validators.required])

    })

    constructor(private tokenservice:Token, private router:Router, private data:Data,){}

    ngOnInit(): void {
        // if(!this.tokenservice.getToken() ){

        //     this.router.navigate(['/login'])

        // }

        // if(this.tokenservice.isTokenExpired()){
        //     this.router.navigate(['/login'])

        // }

        this.getKpi()
       console.log( formatDate(new Date(1648751400000),'MM-yyyy','en-US'),' Format');

    }


    getKpi(){
        this.data.getKpi().subscribe((x:any)=>{this.kpilist=x.response; console.log(x.response)})
    }

    getDetails(id:any){

        
        this.id=id
        console.log(this.id)
    }


   

}