import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router'; // Import RouterModule
import { PlaylistsService } from '../../../../core/services/playlists.service';
import { Playlist } from '../../../../core/models/playlists.interface';
import { AdminNavbar } from '../../../../shared/components/admin-navbar/admin-navbar';
AdminNavbar
@Component({
  selector: 'app-playlist-detail',
  standalone: true,
  imports: [CommonModule, AdminNavbar, RouterModule], // Add RouterModule
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.scss']
})
export class PlaylistDetailComponent implements OnInit {
  playlist: Playlist | null = null;
  isLoading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private playlistsService: PlaylistsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const playlistId = params.get('id');
      if (playlistId) {
        this.fetchPlaylistDetails(parseInt(playlistId, 10));
      } else {
        this.error = 'Playlist ID not provided.';
        this.isLoading = false;
      }
    });
  }

  fetchPlaylistDetails(id: number): void {
    this.isLoading = true;
    this.error = null;
    this.playlistsService.getPlaylistById(id).subscribe({
      next: (response) => {
        this.playlist = response.data;
        this.isLoading = false;
      },
      error: (err: any) => {
        console.error('Error fetching playlist details:', err);
        this.error = 'Failed to load playlist details. Please try again later.';
        this.isLoading = false;
      }
    });
  }
}