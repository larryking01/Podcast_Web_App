import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError, retry } from 'rxjs';
import { Playlists, createPlaylist, PlaylistResponse, PlaylistEpisodeResponse, addEpisodeToPlaylist, singlePlaylistResponse, EditPlaylist, EditPlaylistResponse, DeletPlaylistResponse } from '../models/playlists.interface';
import { ErrorHanlder } from './error-hanlder.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {

  private baseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient, private errorHandler: ErrorHanlder) { }
  
  getPlaylists(): Observable<Playlists[]> {
    return this.http.get<Playlists[]>(`${this.baseUrl}v1/playlists`)
      .pipe(
        retry(2), 
        catchError(this.errorHandler.handle) 
      );
  }

  createPlaylist(playlist: createPlaylist): Observable<PlaylistResponse> {
    return this.http.post<PlaylistResponse>(`${this.baseUrl}v1/playlists`, playlist)
      .pipe(
        retry(2), 
        catchError(this.errorHandler.handle) 
      );
  }

  addEpisodeToPlaylist(playlistIds: addEpisodeToPlaylist): Observable<PlaylistEpisodeResponse> {
    return this.http.post<PlaylistEpisodeResponse>(`${this.baseUrl}v1/playlists/${playlistIds}/episodes/`, playlistIds)
      .pipe(
        retry(2), 
        catchError(this.errorHandler.handle) 
      );
  }

  getSinglePlaylist(id: number): Observable<singlePlaylistResponse> {
    return this.http.get<singlePlaylistResponse>(`${this.baseUrl}v1/playlists/${id}`)
      .pipe(
        retry(2), 
        catchError(this.errorHandler.handle) 
      );
  }

  editPlaylist(id: number, newEdit: EditPlaylist): Observable<EditPlaylistResponse> {
    return this.http.put<EditPlaylistResponse>(`${this.baseUrl}v1/playlists/${id}`, newEdit)
      .pipe(
        retry(2), 
        catchError(this.errorHandler.handle) 
      );
  }

  deletePlaylist(id: number): Observable<DeletPlaylistResponse> {
    return this.http.delete<DeletPlaylistResponse>(`${this.baseUrl}v1/playlists/${id}`)
      .pipe(
        catchError(this.errorHandler.handle) 
      );
  }
}
