import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Token } from './token.service';
import { Observable } from 'rxjs';


@Injectable()

export class ServerInterceptor{
    
}