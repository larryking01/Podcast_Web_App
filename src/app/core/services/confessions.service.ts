import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError, retry } from 'rxjs';
import { Confession, addConfession, ConfessionResponse, updateConfession } from '../models/confession.interface';
import { ErrorHanlder } from './error-hanlder';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Confessions {

  private baseUrl = environment.apiBaseUrl;

  constructor( private http: HttpClient, private errorHandler: ErrorHanlder) { }

  getConfessions(): Observable<Confession[]> {
    return this.http.get<Confession[]>(`${this.baseUrl}v1/confessions`)
      .pipe(
        retry(2), 
        catchError(this.errorHandler.handle) 
      );
  }

 addConfession(confession: addConfession): Observable<ConfessionResponse> {
    return this.http.post<ConfessionResponse>(`${this.baseUrl}v1/confessions`, confession)
      .pipe(
        retry(2), 
        catchError(this.errorHandler.handle) 
      );
  }

  getConfessionById(id: number): Observable<ConfessionResponse> {
    return this.http.get<ConfessionResponse>(`${this.baseUrl}v1/confessions/${id}`)
      .pipe(
        retry(2), 
        catchError(this.errorHandler.handle) 
      );
  }

  updateConfession(id: number): Observable<updateConfession> {
    return this.http.put<updateConfession>(`${this.baseUrl}v1/confessions/${id}`, id)
      .pipe(
        retry(2), 
        catchError(this.errorHandler.handle) 
      );
  }

  deleteConfession(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}v1/confessions/${id}`)
      .pipe(
        catchError(this.errorHandler.handle) 
      );
  }
}
