import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminNavbar } from '../../../shared/components/admin-navbar/admin-navbar';
import { AdminSidebar } from '../../../shared/components/admin-sidebar/admin-sidebar';
import { EpisodesService } from '../../../core/services/episodes.service';
import { EpisodeResponse } from '../../../core/models/episodes.interface';

@Component({
  selector: 'app-admin-dashboard',
  imports: [RouterModule, AdminNavbar, AdminSidebar],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss'
})
export class AdminDashboard implements OnInit {
  currentUser: any = null;
  username: string = '';
  totalEpisodes: number = 0; 

  constructor(private episodesService: EpisodesService) {}

  ngOnInit(): void {
    this.getTotalEpisodes();
    const currentUserJson = localStorage.getItem('currentUser');
    if (currentUserJson) {
      this.currentUser = JSON.parse(currentUserJson);
      this.username = this.currentUser.name;
    }
  }

  getTotalEpisodes(): void {
    this.episodesService.getEpisodes().subscribe(
      (response: EpisodeResponse) => {
        this.totalEpisodes = response.meta?.total ?? 0;
        console.log("Response",response);
      },
      error => {
        console.error('Error fetching total episodes:', error);
      }
    );
  }
}
