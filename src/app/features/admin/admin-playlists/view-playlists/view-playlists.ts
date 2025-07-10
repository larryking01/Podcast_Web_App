import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router'; // Import RouterModule
import { PlaylistsService } from '../../../../core/services/playlists.service';
import { Playlist, PlaylistsResponse } from '../../../../core/models/playlists.interface';
import { AdminNavbar } from '../../../../shared/components/admin-navbar/admin-navbar';
AdminNavbar
@Component({
  selector: 'app-view-playlists',
  standalone: true,
  imports: [CommonModule, AdminNavbar, RouterModule], // Add RouterModule and corrected AdminNavbarComponent
  templateUrl: './view-playlists.html',
  styleUrls: ['./view-playlists.scss']
})
export class ViewPlaylistsComponent implements OnInit {
  playlists: Playlist[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private playlistsService: PlaylistsService) { }

  ngOnInit(): void {
    this.fetchPlaylists();
  }

  fetchPlaylists(): void {
    this.isLoading = true;
    this.error = null;
    this.playlistsService.getAllPlaylists().subscribe({
      next: (response: PlaylistsResponse) => {
        this.playlists = response.data.data;
        this.isLoading = false;
      },
      error: (err: any) => {
        console.error('Error fetching playlists:', err);
        this.error = 'Failed to load playlists. Please try again later.';
        this.isLoading = false;
      }
    });
  }
}
