import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Token } from "./token.service";

@Component({
    selector:'ip-kpi',
    templateUrl:'./kpi.component.html'
})

export class Kpi{
    kpidata:{kpiName:string,kpiDesc:string}[]=[]

    kpiForm= new FormGroup({

        kpiName:new FormControl('',[Validators.required]),
        kpiDesc:new FormControl('',[Validators.required])
    })

    constructor(private tokenservice:Token, private router:Router){}

    ngOnInit(): void {
        // if(!this.tokenservice.getToken() ){
        //     this.router.navigate(['/login'])

        // }

        // if(this.tokenservice.isTokenExpired()){
        //     this.router.navigate(['/login'])

        // }
    }

    login(){
        let val=this.kpiForm.value
        this.kpidata.push(val)
        console.log(this.kpidata,'   ')
        

    }

    submit(){
        return this.kpiForm.valid
    }



}