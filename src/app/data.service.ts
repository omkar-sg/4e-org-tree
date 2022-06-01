import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const depturl='https://dev-api.tqmi.io/setting-management/api/departments'
const datacapurl='https://dev-api.tqmi.io/setting-management/api/data-capture-frequency' 
const datarevurl='https://dev-api.tqmi.io/setting-management/api/data-review-frequency'
const perspectiveurl='https://dev-api.tqmi.io/setting-management/api/perspectives'
@Injectable()

export class Data{

    constructor(private http:HttpClient){}

    getDepartment(){
        return this.http.get(depturl)

    }

    getDataCapFreq(){
        return this.http.get(datacapurl)

    }

    getDataRevFreq(){

        return this.http.get(datarevurl)
    }
}