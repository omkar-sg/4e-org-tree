import { Component } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { IDropdownSettings, } from 'ng-multiselect-dropdown';

@Component({
    selector:"ip-admin",
    templateUrl:'./admin.component.html'
})

export class Admin{

    constructor(private fb:FormBuilder){}


    months=['april','may','june']


    myform= this.fb.group({
        title:'Testing',
        month:['',Validators.required],
        dataCaptured:new FormArray([])
    
      })

      capdata=new FormGroup({
        target:new FormControl('',Validators.required),
        lower:new FormControl('',Validators.required),
        upper:new FormControl('',Validators.required),
  
      })
    
      addMonths(){
        (<FormArray>this.myform.get('dataCaptured')).push(this.capdata.value)
        console.log(this.myform.value)
      }
    
}