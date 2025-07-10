import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamMember, TeamMemberResponse } from '../../../../core/models/team-members.interface';
import { TeamMembersService } from '../../../../core/services/team-members.service';
import { CommonModule } from '@angular/common';
import { AdminNavbar } from '../../../../shared/components/admin-navbar/admin-navbar';
@Component({
  selector: 'app-team-details',
  imports: [CommonModule, AdminNavbar],
  templateUrl: './team-details.html',
  styleUrl: './team-details.scss'
})
export class TeamDetails implements OnInit {
  teamMember: TeamMember | undefined;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private teamMembersService: TeamMembersService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id']; // '+' converts string to number
      if (id) {
        this.teamMembersService.getTeamMember(id).subscribe({
          next: (response: TeamMemberResponse) => {
            this.teamMember = response.data; // Assuming response has a 'data' property
          },
          error: (error: any) => {
            console.error('Error fetching team member:', error);
            this.errorMessage = 'Failed to load team member details.';
          }
        });
      }
    });
  }
}
