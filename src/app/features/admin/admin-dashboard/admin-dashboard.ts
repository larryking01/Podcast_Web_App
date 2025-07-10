import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminNavbar } from '../../../shared/components/admin-navbar/admin-navbar';
import { AdminSidebar } from '../../../shared/components/admin-sidebar/admin-sidebar';
import { EpisodesService } from '../../../core/services/episodes.service';
import { EpisodeResponse } from '../../../core/models/episodes.interface';
import { ConfessionsService } from '../../../core/services/confessions.service';
import { getConfessons, cofession2 } from '../../../core/models/confession.interface';
import { AdminConfession, AdminConfessionResponse } from '../../../core/models/admin-confession.interface';

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
  totalConfessions: number = 0;
  confessions: AdminConfession[] = [];

  constructor(private episodesService: EpisodesService, private confessionservice : ConfessionsService) {}

  ngOnInit(): void {
    this.getTotalEpisodes();
    this.getConfessions();
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
        
      },
      error => {
        console.error('Error fetching total episodes:', error);
      }
    );
  }

getConfessions(): void {
 this.confessionservice.getConfessions().subscribe(
   (response: AdminConfessionResponse) => {
     this.confessions = response.data;
     this.totalConfessions = response.meta?.total ?? 0;
      
    },
    error => {
      console.error('Error fetching total confessions:', error);
    }
  );
}


  }

