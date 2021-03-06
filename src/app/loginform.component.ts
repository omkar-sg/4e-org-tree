import { Component, OnInit } from "@angular/core";
import { FormGroup,FormControl,Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Server } from "./server.service";
import { Token } from "./token.service";



@Component({
    selector:'ip-reactive',
    templateUrl:'./loginform.component.html'
})

export class LoginForm implements OnInit {


    remMeflag=false


   
    loginForm= new FormGroup({
        userName:new FormControl('',[Validators.minLength(3),Validators.required]),
        password:new FormControl('',[Validators.required,])
    });

    constructor(private server:Server, private router:Router , private tokenservice:Token){}
   
    ngOnInit(): void {

        if(!this.tokenservice.isTokenExpired()){
            this.router.navigate(['/dashboard'])

        }
        // else{

        //     alert("Logged Out")
        // }
    }

    login(){
        console.log('login')
        
        this.server.login(this.loginForm.value.userName,this.loginForm.value.password).subscribe(
            
            
            x=>{
               
                if (this.remMeflag){this.remMe();console.log('from login if')}
                // console.log(x)
                this.tokenservice.saveToken(x)
                
                // this.loginForm.reset()
                alert("Login successful")
                this.router.navigate(['/dashboard'])
             

    
                
            },
            
            err=>{
                this.loginForm.reset()
                console.log(err)
                alert("Username or password is incorrect")
            }

            )

        
    }

    

    submit(){
        // console.log(this.login)
        return this.loginForm.valid
        
        
    }


    remMe(){

            this.tokenservice.remMe()
        

    }


}