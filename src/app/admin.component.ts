import { Component } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { IDropdownSettings, } from 'ng-multiselect-dropdown';
import { Data } from "./data.service";
import jwt_decode from "jwt-decode";
import { Token } from "./token.service";

@Component({
    selector:"ip-admin",
    templateUrl:'./admin.component.html'
})

export class Admin{

    constructor(private fb:FormBuilder,private data:Data, private token:Token){}


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


    currmonth!:any[];
    id!:number;

    rm:any


    myform= this.fb.group({
       // title:'Testing',
         month:['',Validators.required],


        dataCaptured: this.fb.array([
          // this.fb.group({
          //   target:[''],
          //   lower:[''],
          //   upper:['']

          // })
        ])
    
      })

      // capdata=new FormGroup({
      //   target:new FormControl('',Validators.required),
      //   lower:new FormControl('',Validators.required),
      //   upper:new FormControl('',Validators.required),
  
      // })


      get dataCaptured(){
        return this.myform.get('dataCaptured') as FormArray
      }
    
      addMonths(id:any){
       // this.setDate(id)
       
       this.id=id.id;
       console.log(this.id)

      //  let tk:any=jwt_decode(this.token.getToken()as string)

      //  console.log(tk.employeeId ,'Token decoded')

       

        const newitem= this.fb.group({
          target:[''],
          lower:[''],
          upper:[''],
          startDate:"2022-05-01T00:00:00",
          endDate: "2022-05-31T23:59:59",
          indicator: 2,
          disabled: false,
          upperValueType: "ABSOLUTE",
          lowerValueType: "ABSOLUTE"
  });


        // (<FormArray>this.myform.get('dataCaptured')).push(newitem)
        this.dataCaptured.push(newitem)
        //console.log(this.myform.value)
      }


      removeMonths(id:any){
        // console.log(this.myform.get('month')?.value)
        // console.log(id)
        console.log(this.rm)
        // this.dataCaptured.controls.splice(id,1)
        this.dataCaptured.removeAt(id)
        // this.dataCaptured.
      }

      submit(){
        console.log(this.myform.value)
      }

      clearMonths(){
        this.dataCaptured.clear()
      }

      setDate(m:number){
        const dt='01/'+m+'/2022'
        console.log(new Date('01/4/2022'),'set date')
        // this.dataCaptured.get('startDate')?.setValue(new Date(dt).toISOString())
        this.dataCaptured.at(m).setValue(new Date(dt).toISOString())

        console.log(this.myform.value)
      }

      getMonthRange(){
        console.log(new Date("2022-04-01").toISOString())
        // this.data.getMonthrange().subscribe((res:any)=>{console.log(res)})
    }



    
}