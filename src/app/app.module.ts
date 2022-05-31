import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
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

@NgModule({
  declarations: [
    AppComponent,childComponent,LoginForm,Observable1,routingcomponent,Navbar
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,AppRoutingModule,HttpClientModule
  ],
  providers: [Server,Token,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
