import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ErrorHanlder } from './error-hanlder.service';

import { Playlist,Episode, PlaylistResponse, PlaylistsResponse, CreatePlaylistRequest, UpdatePlaylistRequest, DeletePlaylistResponse, AddEpisodesResponse, AddEpisodesRequest } from '../models/playlists.interface';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {
  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private errorHandler: ErrorHanlder) {}

  getAllPlaylists(): Observable<PlaylistsResponse> {
    return this.http.get<PlaylistsResponse>(`${this.baseUrl}/v1/playlists`)
      .pipe(catchError(err => this.errorHandler.handle(err)));
  }

  createPlaylist(payload: CreatePlaylistRequest): Observable<PlaylistResponse> {
    return this.http.post<PlaylistResponse>(`${this.baseUrl}/v1/playlists`, payload)
      .pipe(catchError(err => this.errorHandler.handle(err)));
  }

  addEpisodesToPlaylist(playlistId: number, payload: AddEpisodesRequest): Observable<AddEpisodesResponse> {
    return this.http.post<AddEpisodesResponse>(`${this.baseUrl}/v1/playlists/${playlistId}/episodes`, payload)
      .pipe(catchError(err => this.errorHandler.handle(err)));
  }

  getPlaylistById(id: number): Observable<PlaylistResponse> {
    return this.http.get<PlaylistResponse>(`${this.baseUrl}/v1/playlists/${id}`)
      .pipe(catchError(err => this.errorHandler.handle(err)));
  }

  updatePlaylist(id: number, payload: UpdatePlaylistRequest): Observable<PlaylistResponse> {
    return this.http.put<PlaylistResponse>(`${this.baseUrl}/v1/playlists/${id}`, payload)
      .pipe(catchError(err => this.errorHandler.handle(err)));
  }

  deletePlaylist(id: number): Observable<DeletePlaylistResponse> {
    return this.http.delete<DeletePlaylistResponse>(`${this.baseUrl}/v1/playlists/${id}`)
      .pipe(catchError(err => this.errorHandler.handle(err)));
  }
}
