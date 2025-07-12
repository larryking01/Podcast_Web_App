import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ErrorHanlder } from './error-hanlder.service';

import { Episode, EpisodeMeta, EpisodeResponse, CreateEpisodeDto } from '../models/episodes.interface';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private errorHandler: ErrorHanlder) {}

  // Get all episodes (paginated)
  getEpisodes(): Observable<EpisodeResponse> {
    return this.http.get<EpisodeResponse>(`${this.baseUrl}/v1/episodes`)
      .pipe(catchError(this.errorHandler.handle));
  }

  // get episode by id.
  getEpisodeByID(episodeID: number): Observable<Episode | undefined> {
    return this.http.get<EpisodeResponse>(`${this.baseUrl}/v1/episodes`)
    .pipe(
      catchError(this.errorHandler.handle),
      map(( episodeResponse ) => episodeResponse.data.find( episode => episode.id === episodeID ))
    )
  }

  // Create a new episode
  createEpisode(payload: CreateEpisodeDto): Observable<EpisodeResponse> {
    return this.http.post<EpisodeResponse>(`${this.baseUrl}/v1/episodes`, payload)
      .pipe(catchError(this.errorHandler.handle));
  }

  // Get episodes by season
  getEpisodesBySeason(season: number): Observable<EpisodeResponse> {
    return this.http.get<EpisodeResponse>(`${this.baseUrl}/v1/episodes/season/${season}`)
      .pipe(catchError(this.errorHandler.handle));
  }

  // Search episodes
  searchEpisodes(search: string): Observable<EpisodeResponse> {
    return this.http.get<EpisodeResponse>(`${this.baseUrl}/v1/episodes/search?search=${encodeURIComponent(search)}`)
      .pipe(catchError(this.errorHandler.handle));
  }

  // Update an episode
  updateEpisode(id: number, payload: Partial<CreateEpisodeDto>): Observable<EpisodeResponse> {
    return this.http.put<EpisodeResponse>(`${this.baseUrl}/v1/episodes/${id}`, payload)
      .pipe(catchError(this.errorHandler.handle));
  }

  // Delete an episode
  deleteEpisode(id: number): Observable<EpisodeResponse> {
    return this.http.delete<EpisodeResponse>(`${this.baseUrl}/v1/episodes/${id}`)
      .pipe(catchError(this.errorHandler.handle));
  }
}
