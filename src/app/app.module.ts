import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { childComponent } from './child.component';
import { LoginForm} from './loginform.component';
import { Observable1 } from './observable.component';
import { AppRoutingModule, routingcomponent } from './app-routing.module';
import { Server } from './server.service';
import { HttpClientModule } from '@angular/common/http';
import { Token } from './token.service';
import { Navbar } from './navbar.component';
import { AuthGuard } from './auth.guard';
import { authInterceptorProviders } from './serverinterceptor.interceptor';
import { Data } from './data.service';
import { CreateKpi } from './createkpi.service';
import { KpiDetails } from './kpidetails.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { KpiData } from './kpidata.component';

@NgModule({
  declarations: [
    AppComponent,childComponent,LoginForm,Observable1,routingcomponent,Navbar,KpiDetails,KpiData
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,AppRoutingModule,HttpClientModule,NgMultiSelectDropDownModule.forRoot(),FormsModule,NgSelectModule
  ],
  providers: [Server,Token,AuthGuard,authInterceptorProviders,Data,CreateKpi],
  bootstrap: [AppComponent]
})
export class AppModule { }
