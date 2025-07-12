import { Injectable, inject, OnInit } from '@angular/core';
import { PlaylistsService } from './playlists.service';
import { Playlist } from '../models/playlists.interface';
import { PlaylistResponse } from '../models/playlists.interface';


@Injectable({
  providedIn: 'root'
})
export class Playlists implements OnInit {

  playListService = inject( PlaylistsService )
  playListsArray: Playlist[] = []


  ngOnInit(): void {
    console.log('all playlists')
    this.getAllPlaylists()
    
  }


  getAllPlaylists() {
    this.playListService.getAllPlaylists().subscribe({
      next: ( playListsResponse ) => {
        console.log("playlists response = ", playListsResponse )
      }
    })
    
  }


}
