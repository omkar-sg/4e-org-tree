import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector:"ip-child",
    templateUrl:"./child.component.html"
})

export class childComponent{
    @Input() name:any|string;
    @Output() fromch=new EventEmitter<string>()
 
    msg:string="omkar";

    mark(){
        this.fromch.emit(
            this.msg+"  from child")
    }





}