import { Component ,OnInit} from "@angular/core";
import { Observable, of } from "rxjs";

@Component({
    selector:'ip-observable',
    templateUrl:'./observable.component.html'
})

export class Observable1 implements OnInit{
    
     myObservable = of(10,12,13);
    arr=[1,2,3]

     obj= new Observable((observor)=>{
         console.log("Observable start")
        setTimeout(()=>observor.next('1'),1000)
        setTimeout(()=>observor.next('2'),6000)
        setTimeout(()=>observor.next('3'),10000)
        setTimeout(()=>observor.next('4'),12000)
        // observor.next('2')
        // observor.next('3')
        // observor.next('4')
        // observor.next('2')
        // observor.next('3')
        // observor.next('4')
        // observor.next('2')
        // observor.next('3')
        // observor.next('4')
        // observor.next('2')
        // observor.next('3')
        // observor.next('4')
        // observor.next('2')
        // observor.next('3')
        // observor.next('4')

     })


     ngOnInit(): void {


         this.obj.subscribe((val)=>{
             console.log(val)
         })

         
        this.myObservable.subscribe((val)=>{
            console.log(val)
        })

        
     }


     



}