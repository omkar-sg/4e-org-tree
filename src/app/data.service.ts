import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const depturl='https://dev-api.tqmi.io/setting-management/api/departments'
const datacapurl='https://dev-api.tqmi.io/setting-management/api/data-capture-frequency' 
const datarevurl='https://dev-api.tqmi.io/setting-management/api/data-review-frequency'
const perspectiveurl='https://dev-api.tqmi.io/setting-management/api/perspectives'
const kpitype='https://dev-api.tqmi.io/setting-management/api/kpi-types'
const categories='https://dev-api.tqmi.io/setting-management/api/kpi-categories'

const getkpi='https://dev-api.tqmi.io/org-goal-management/api/goal/get-kpi-list-given-date-range?start=1648751400000&end=1680287399000&includeViewOnly=true'


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
}