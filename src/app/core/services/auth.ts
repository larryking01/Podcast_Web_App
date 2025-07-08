import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError, retry } from 'rxjs';
import { ErrorHanlder } from './error-hanlder';
import {environment} from '../../../../environments/environment';
import { AdminCredentials } from '../models/adminCredentials';
import { AdminLoginResponse } from '../models/adminCredentials';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private errorHandler: ErrorHanlder) { }

  login(credentials: AdminCredentials): Observable<AdminLoginResponse> {
    return this.http.post<AdminLoginResponse>(`${this.baseUrl}v1/login`, credentials)
      .pipe(
        retry(2), 
        catchError(this.errorHandler.handle) 
      );
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}v1/logout`, {})
      .pipe(
        catchError(this.errorHandler.handle) 
      );
  }
}
