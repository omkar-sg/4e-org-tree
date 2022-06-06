import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Token } from './token.service';
import { Observable } from 'rxjs';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class ServerInterceptor implements HttpInterceptor {
    constructor(private token: Token) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let authReq = req;
      const token = this.token.getToken();
      if (token != null) {
        authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
      }
      return next.handle(authReq);
    }
  }
  export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: ServerInterceptor, multi: true }
  ];