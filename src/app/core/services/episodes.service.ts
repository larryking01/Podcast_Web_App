import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError, retry } from 'rxjs';
import { createEpisode, Episodes, EpisodeResponse, message } from '../models/episodes.interface';
import { ErrorHanlder } from './error-hanlder.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  private baseUrl = environment.apiBaseUrl;

  constructor(private http : HttpClient, private errorHandler: ErrorHanlder) { }

  getEpisodes(): Observable<Episodes[]> {
    return this.http.get<Episodes[]>(`${this.baseUrl}v1/episodes`)
      .pipe(
        retry(2), 
        catchError(this.errorHandler.handle) 
      );
  }

  createEpisode(episode: Episodes): Observable<createEpisode> {
    return this.http.post<createEpisode>(`${this.baseUrl}v1/episodes`, episode)
      .pipe(
        retry(2), 
        catchError(this.errorHandler.handle) 
      );
  }

  getEpisodeBySeasonNumber(season: number): Observable<EpisodeResponse> {
    return this.http.get<EpisodeResponse>(`${this.baseUrl}v1/episodes/season/${season}`)
      .pipe(
        retry(2), 
        catchError(this.errorHandler.handle) 
      );
  }


  searchEpisodes(query: string): Observable<Episodes[]> {
    return this.http.get<Episodes[]>(`${this.baseUrl}v1/episodes/${query})`)
      .pipe(
        retry(2), 
        catchError(this.errorHandler.handle) 
      );
  }

  updateEpisode(id: number, episode: Episodes): Observable<EpisodeResponse> {
    return this.http.put<EpisodeResponse>(`${this.baseUrl}v1/episodes/${id}`, episode)
      .pipe(
        retry(2), 
        catchError(this.errorHandler.handle) 
      );
  }

  deleteEpisode(id: number): Observable<message> {
    return this.http.delete<message>(`${this.baseUrl}v1/episodes/${id}`)
      .pipe(
        catchError(this.errorHandler.handle) 
      );
  }
}
