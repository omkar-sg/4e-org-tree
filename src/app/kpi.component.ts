import { Component } from "@angular/core";
import { FormControl, FormGroup,FormBuilder, Validators, FormArray } from "@angular/forms";
import {  Router } from "@angular/router";
import { CreateKpi } from "./createkpi.service";
import { Data } from "./data.service";
import { KpiDetails } from "./kpidetails.component";
import { Token } from "./token.service";
import jwt_decode from "jwt-decode";

@Component({
    selector:'ip-kpi',
    templateUrl:'./kpi.component.html',
    styleUrls:['./kpi.component.css']
    
})

export class Kpi{


    constructor(private data: Data, private fb:FormBuilder, private ckpi:CreateKpi , private tokenservice:Token){}


    kpidata:{kpiName:string,kpiDesc:string}[]=[]

    deptarr:any=[]
    datacaparr:any=[]
    datarevfreq:any=[]//
    filtrevfre:any=[]
    perspectives:any=[]
    kpitype:any=[]
    kpicategories:any=[]
    directionofgoodness=['Up','Down']
    
    months=
    [{ id: 1, name: 'January' },

        { id: 2, name: 'February' },

        { id: 3, name: 'March' },

        { id: 4, name: 'April' },

        { id: 5, name: 'May' },

        { id: 6, name: 'June' },

        { id: 7, name: 'July' },

        { id: 8, name: 'August' },

        { id: 9, name: 'September' },

        { id: 10, name: 'Octomber' },

        { id: 11, name: 'November' },

        { id: 12, name: 'December' }];

selected:any[]=[]

    kpiForm= new FormGroup({

        kpiName:new FormControl('',[Validators.required]),
        kpiDesc:new FormControl('',[Validators.required]),
        kpidepts:new FormControl('',[Validators.required]),
        kpidatacapfreq:new FormControl('',[Validators.required]),
        kpidatarevfreq:new FormControl('',[Validators.required]),
    })


    kpi= this.fb.group({
        title:['',[Validators.required]],
        departmentId:['',Validators.required],
        perspective:['',Validators.required],
        goalDescription: ['',Validators.required],
        // remark:['',Validators.required],
        dataCaptureFrequency:['',Validators.required],
        reviewFrequency:['',Validators.required],

        // title:"test",
        // departmentId:"8",
        // perspective:"5ea2c4dd1d4ec94491c0802b",
        // goalDescription: "hjghj",
        remark:"rem",
        // dataCaptureFrequency: "606573e173d7e41e2e59a4a1",
        // reviewFrequency: "6065751583c45503bad397b0",

        annualTarget: 100,
        actionLimit: "MANUAL",	
        // category: "5ea2c50f1d4ec94491c08030",
        category:["",Validators.required],
        isTypeKPI: true,
        //type: "606573e173d7e41e2e59a4b0",
        type:['',Validators.required],

        parentId: null,
        perspectivePrefix: "I",
        // directionOfGoodness: "Up",
        directionOfGoodness:['',Validators.required],
        ytdCalculation: "SUM",
        weightage: 1,


        // captureData:[[
        //     {
        //         target: 0,
        //         lower: 0,
        //         upper: 0,
        //         startDate: "2022-05-01T00:00:00",
        //         endDate: "2022-05-31T23:59:59",
        //         indicator: 2,
        //         disabled: false,
        //         upperValueType: "ABSOLUTE",
        //         lowerValueType: "ABSOLUTE"
        //     }
        // ]],

        captureData:this.fb.array([]),


        unitOfMeasurement: "606573e173d7e41e2e59a4ab",
        goalFormula: null,
        isActive: true,


        owners: {
            individuals: [
                {
                    employeeId:'',// "omkar.goskewar",
                    isPrimary: ''
                }
            ]
        },

        viewers: {
            individuals: [],
            groups: []
        },

        financialYearStart: 1648751400000,
        financialYearEnd: 1680287399000,
        dataAggregationFrequency: "62833d7b412ac9eebe3a3c17",
        dataAggregationMethod: "SUM"




    })

    

    ngOnInit(): void {
        // if(!this.tokenservice.getToken() ){
        //     this.router.navigate(['/login'])

        // }

        // if(this.tokenservice.isTokenExpired()){
        //     this.router.navigate(['/login'])

        // }

        this.getDept()
        this.getDataCapFreq()
        this.getDataRevFreq()
        this.getType()
        this.getCategories()   //category
        this.getPerspective()
        // this.getFiltDataRev(2)
    }

    getDept(){
        console.log("Get Depts")
         this.data.getDepartment().subscribe((response:any)=>{this.deptarr=response.response;}) //console.log(response.response)
    }

    getDataCapFreq(){
        this.data.getDataCapFreq().subscribe(((res:any)=>{this.datacaparr=res.response;console.log(res.response,'capfreq')}))
        console.log(this.datacaparr)
    }

    getDataRevFreq(){
        this.data.getDataRevFreq().subscribe((res:any)=>{this.datarevfreq=res.response;})
    }

    getType(){
        this.data.getType().subscribe((res:any)=>{this.kpitype=res.response;console.log(res.response)}) //this.kpitype=res.response;
    }

    getCategories(){
        this.data.getCategories().subscribe((res:any)=>{this.kpicategories=res.response;console.log(res)}) //this.kpicategories=res.response;
    }

    getPerspective(){
        this.data.getPerspective().subscribe((res:any)=>{this.perspectives=res.response;console.log(res)}) //this.perspectives=res.response;
    }

    getMonthRange(){
        this.data.getMonthrange().subscribe((res:any)=>{console.log(res)})
    }



    t1(event:any){

        this.kpiForm.get('kpidatarevfreq')?.setValue('')
        let num=this.datacaparr.find((ele:any)=>ele._id==event.target.value).order

        if(num>5){this.filtrevfre=this.datarevfreq.filter((el:any)=>el.order>=num-1)}
       else{
        this.filtrevfre=this.datarevfreq.filter((el:any)=>el.order>=num)

       }


       // console.log('check'+JSON.stringify(event.target.value)+'t1','   ',num)
        //this.filtrevfre=this.datarevfreq.filter((el:any)=>el.order>=event.target.value)
    }



    createkpi(){
        let tk:any=jwt_decode(this.tokenservice.getToken() as string)

        this.kpi.controls['owners'].setValue({
            individuals: [
                {
                    employeeId:tk.employeeId,
                    isPrimary: tk.isPrimary
                }
            ]
        })
        
        console.log(this.kpi.value)
        this.ckpi.createKpi(this.kpi.value).subscribe(x=>console.log(x))
        alert("KPI Created")
        this.kpi.reset()
    }
    

    




    getFiltDataRev(datacapord:any){
        console.log(datacapord)
        let num=this.datacaparr.find((ele:any)=>ele._id==datacapord)
        console.log(num,'num')
        if(datacapord>5){this.filtrevfre=this.datarevfreq.filter((el:any)=>el.order>=num-1)}
       else{
        this.filtrevfre=this.datarevfreq.filter((el:any)=>el.order>=num)

       }
        
        // console.log(this.filtrevfre,'array')
        return this.filtrevfre
    }


    create(){
        let val=this.kpiForm.value
        this.kpidata.push(val)
       // console.log(this.kpi.value)

        this.createkpi()
       // console.log(this.kpidata,'   ')
        

    }

    submit(){
    
        return this.kpiForm.valid
    }


    get dataCaptured(){
        return this.kpi.get('captureData') as FormArray
      }


    addMonths(){

        const newitem= this.fb.group({
          target:[''],
          lower:[''],
          upper:[''],
          startDate: "2022-05-01T00:00:00",
          endDate: "2022-05-31T23:59:59",
          indicator: 2,
          disabled: false,
          upperValueType: "ABSOLUTE",
          lowerValueType: "ABSOLUTE"
        });

        this.dataCaptured.push(newitem)

    }

    removeMonths(id:any){
        // console.log(this.myform.get('month')?.value)
        this.dataCaptured.controls.splice(id,1)
    }
    removeData(i?: any) {

        // console.log(i);
    
        console.log(this.selected)
    //    let id= this.selected.indexOf(this.selected.find(el=>el))

    //    console.log(id)

    //    this.dataCaptured.controls.splice(i,1)
    
    
    
        this.dataCaptured.removeAt(i);
    
        this.selected.splice(i, 1);
    
        // this.captureData
    
      }



}