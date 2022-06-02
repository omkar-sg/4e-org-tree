import { Component, Input, OnInit } from "@angular/core";
import { Data } from "./data.service";

@Component({
    selector:'ip-kpidetails',
    templateUrl:'./kpidetails.component.html'
})

export class KpiDetails implements OnInit{
    constructor(private data:Data){}

    ngOnInit(): void {
    this.getkpi()

    /*setTimeout(() => {this.getDetails("62978aaa4d5bb400094bb693")
        
    }, 2000);*/
    // this.getDetails("62978aaa4d5bb400094bb693")
    }

    @Input() id:any;
    flag=false

    kpilist:any=[]
    reqkpi:any=[]

    getkpi(){
        // if(this.id!=''){
        //     this.getDetails(this.id)

        // }

        this.data.getKpi().subscribe((res:any)=>{this.kpilist=res.response;console.log(res.response,"from getkpi")})
    }

    getDetails(){
        //console.log(id," from kpi Details",this.kpilist)
        return this.kpilist.filter((ele:any)=>{
            if(ele._id==this.id){return ele}})
        //console.log(this.reqkpi,'------------this')
    }

    test(){
        if(this.id!='' && this.kpilist.length==0){
            // this.getDetails(this.id)
            console.log("inside test",this.id,this.reqkpi)
            this.id=''
            this.flag=true
             return this.reqkpi
            // return true
        }
        // else{
        //     // this.getkpi()
        //     return this.reqkpi
        //     // this.flag=false
        //     return false
        // }
    }
}