import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ErrorHanlder } from './error-hanlder.service';


import { getConfessons, Confession, AddConfessionRequest, ConfessionResponse, GetConfessionResponse, DeleteConfessionResponse, ToggleApprovalResponse } from '../models/confession.interface';
import { AdminConfessionResponse } from '../models/admin-confession.interface';


@Injectable({
  providedIn: 'root'
})
export class ConfessionsService {
  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private errorHandler: ErrorHanlder) {}

  // GET /v1/confessions?status=approved|pending

  getConfessions(status?: 'approved' | 'pending'): Observable<AdminConfessionResponse> {

    let params = new HttpParams();
    if (status) {
      params = params.set('status', status);
    }

    return this.http.get<AdminConfessionResponse>(`${this.baseUrl}/v1/confessions`, { params })

      .pipe(
        catchError(this.errorHandler.handle)
      );
  }

  // POST /v1/confessions
  addConfession(confession: AddConfessionRequest): Observable<ConfessionResponse> {
    return this.http.post<ConfessionResponse>(`${this.baseUrl}/v1/confessions`, confession)
      .pipe(
        catchError(this.errorHandler.handle)
      );
  }

  // GET /v1/confessions/{id}
  getConfession(id: number): Observable<GetConfessionResponse> {
    return this.http.get<GetConfessionResponse>(`${this.baseUrl}/v1/confessions/${id}`)
      .pipe(
        catchError(this.errorHandler.handle)
      );
  }

  // DELETE /v1/confessions/{id}
  deleteConfession(id: number): Observable<DeleteConfessionResponse> {
    return this.http.delete<DeleteConfessionResponse>(`${this.baseUrl}/v1/confessions/${id}`)
      .pipe(
        catchError(this.errorHandler.handle)
      );
  }

  // PATCH /v1/confessions/{id}
  toggleApproval(id: number): Observable<ToggleApprovalResponse> {
    return this.http.patch<ToggleApprovalResponse>(`${this.baseUrl}/v1/confessions/${id}`, {})
      .pipe(
        catchError(this.errorHandler.handle)
      );
  }
}
