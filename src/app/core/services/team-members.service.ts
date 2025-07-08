import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError, retry } from 'rxjs';
import { ErrorHanlder } from './error-hanlder.service';
import { environment } from '../../../../environments/environment';

import { TeamMember, TeamMembersListResponse, TeamMemberResponse, DeleteResponse } from '../models/team-members.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamMembersService {
  baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private errorHandler: ErrorHanlder) {}

  getAllTeamMembers(): Observable<TeamMembersListResponse> {
    return this.http.get<TeamMembersListResponse>(`${this.baseUrl}/v1/team-members`)
      .pipe(
        retry(1),
        catchError(this.errorHandler.handle)
      );
  }

  getTeamMember(id: number): Observable<TeamMemberResponse> {
    return this.http.get<TeamMemberResponse>(`${this.baseUrl}/v1/team-members/${id}`)
      .pipe(
        retry(1),
        catchError(this.errorHandler.handle)
      );
  }

  createTeamMember(member: Omit<TeamMember, 'id'>): Observable<TeamMemberResponse> {
    return this.http.post<TeamMemberResponse>(`${this.baseUrl}/v1/team-members`, member)
      .pipe(
        catchError(this.errorHandler.handle)
      );
  }

  updateTeamMember(id: number, member: Omit<TeamMember, 'id'>): Observable<TeamMemberResponse> {
    return this.http.put<TeamMemberResponse>(`${this.baseUrl}/v1/team-members/${id}`, member)
      .pipe(
        catchError(this.errorHandler.handle)
      );
  }

  deleteTeamMember(id: number): Observable<DeleteResponse> {
    return this.http.delete<DeleteResponse>(`${this.baseUrl}/v1/team-members/${id}`)
      .pipe(
        catchError(this.errorHandler.handle)
      );
  }
}
