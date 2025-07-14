import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    if (token) {
      const expiresAt = parseInt(localStorage.getItem('auth_token_expires_at') || '0');

      if (!token || Date.now() > expiresAt) {

        // Token has expired — remove it
        localStorage.removeItem('token');
        localStorage.removeItem('auth_token_expires_at');
   
  }

      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });


      return next.handle(cloned);
    }

    return next.handle(req);
  }
}
