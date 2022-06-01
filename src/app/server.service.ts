import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const url= 'https://dev-api.tqmi.io/user-management/login'             //'https://reqres.in/api/login'

const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}


@Injectable()

export class Server{
   // credentials:{username:string,password:string}[]=[{username:'omkar@caizin.com',password:'omkar1998'}]

    constructor(private http:HttpClient){}

    login(username:string,password:string):Observable<any>{

        return this.http.post(url,{username,password},httpOptions)
    }
}