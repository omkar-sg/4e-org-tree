import { Component } from "@angular/core";
import { Data } from "./data.service";



@Component({
    selector:"ip-kpidata",
    templateUrl:'./kpidata.component.html'
})

export class KpiData{

    constructor(private data:Data){}

    userHierarchy:any[]=[]


    getTreeData(){
        this.data.treeData().subscribe((res:any)=>{
            this.userHierarchy=res.response
            console.log(res)})
    }


    treeData(){
        let root:any[]=[]
        for(let i=0;i<this.userHierarchy.length;i++){
            
            if(!this.userHierarchy[i].userHierarchy.includes('/')){
                console.log(this.userHierarchy[i])
                root.push(this.userHierarchy[i].userHierarchy)
                root[i]=[]
            }

            if(this.userHierarchy[i].userHierarchy.split('/').length>1){
                root[i].push(this.userHierarchy[i].userHierarchy.split('/')[1])
                console.log(root)
               

            }
        }
    }

}