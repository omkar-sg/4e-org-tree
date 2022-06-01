import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';



const createkpiurl='https://dev-api.tqmi.io/org-goal-management/api/goal'
const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}

@Injectable()

export class CreateKpi{

    constructor(private http:HttpClient){}

createKpi(kpi:any){
    return this.http.post(createkpiurl,kpi,httpOptions)
}

}