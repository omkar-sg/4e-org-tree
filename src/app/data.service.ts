import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from "src/environments/environment";

const depturl=environment.apiurl +'/setting-management/api/departments'
const datacapurl=environment.apiurl +'/setting-management/api/data-capture-frequency' 
const datarevurl=environment.apiurl +'/setting-management/api/data-review-frequency'
const perspectiveurl=environment.apiurl +'/setting-management/api/perspectives'
const kpitype=environment.apiurl +'/setting-management/api/kpi-types'
const categories=environment.apiurl +'/setting-management/api/kpi-categories'

const getkpi=environment.apiurl +'/org-goal-management/api/goal/get-kpi-list-given-date-range?start=1648751400000&end=1680287399000&includeViewOnly=true'
const monthrange=environment.apiurl +'/setting-management/api/month-range'

const kpidata=environment.apiurl +'/org-goal-management/api/kpi/hierarchical-users-kpi-status'

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

    getPerspective(){
        return this.http.get(perspectiveurl)
    }

    getType(){
        return this.http.get(kpitype)
    }

    getCategories(){
        return this.http.get(categories)
    }

    getKpi(){
        return this.http.get(getkpi)
    }

    getMonthrange(){
        return this.http.get(monthrange)
    }



    treeData(){

        let queryParams = new HttpParams();
    
        queryParams=queryParams.append('employeeid','vikas.raut');
    
        queryParams=queryParams.append('fyStartDate','1648751400000');
    
        queryParams=queryParams.append('fyEndDate','1680287399000');
    
        queryParams=queryParams.append('groupby','kpi');
    
        queryParams=queryParams.append('kpiType','606573e173d7e41e2e59a4b1,606573e173d7e41e2e59a4b0,61ab4d8127d6319a5950235d,61ab4da827d6319a5950235e');
    
        queryParams=queryParams.append('aggregate','false');
    
        return this.http.get(kpidata,{params:queryParams});
    
      }
}