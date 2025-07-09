import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError, retry } from 'rxjs';
import { ErrorHanlder } from './error-hanlder.service';
import {environment} from '../../../../environments/environment';
import { AdminLoginResponse, AdminSigup, AdminCredentials, AdminSigupResponse } from '../models/adminCredentials.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminAuth {

  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private errorHandler: ErrorHanlder) { }

  // Admin Authentication Methods

  //admn login
  login(credentials: AdminCredentials): Observable<AdminLoginResponse> {
    return this.http.post<AdminLoginResponse>(`${this.baseUrl}/v1/login`, credentials)
      .pipe(
        retry(2), 
        catchError(this.errorHandler.handle) 
      );
  }

  //admin logout
  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}v1/logout`, {})
      .pipe(
        catchError(this.errorHandler.handle) 
      );
  }
  

  //admin signup
  register(signupDetails: AdminSigup): Observable<AdminSigupResponse> {
    return this.http.post<AdminSigupResponse>(`${this.baseUrl}/v1/register`, signupDetails)
      .pipe(
        retry(2), 
        catchError(this.errorHandler.handle) 
      );
  }
}
