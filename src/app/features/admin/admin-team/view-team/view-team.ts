import { Component, OnInit } from '@angular/core';
import { TeamMember } from '../../../../core/models/team-members.interface';
import { TeamMembersService } from '../../../../core/services/team-members.service';
import { CommonModule } from '@angular/common';
import { AdminNavbar } from '../../../../shared/components/admin-navbar/admin-navbar';
import { AdminSidebar } from '../../../../shared/components/admin-sidebar/admin-sidebar';
import { RouterLink } from '@angular/router'; // Import RouterLink for navigation
@Component({
  selector: 'app-view-team',
  imports: [CommonModule, AdminNavbar, RouterLink, AdminSidebar],
  templateUrl: './view-team.html',
  styleUrl: './view-team.scss'
})
export class ViewTeam implements OnInit {
  teamMembers: TeamMember[] = [];

  constructor(private teamMembersService: TeamMembersService) {}

  ngOnInit(): void {
    this.teamMembersService.getAllTeamMembers().subscribe(
      (response) => {
        this.teamMembers = response.data;
      },
      (error) => {
        console.error('Error fetching team members:', error);
      }
    );
  }
}
