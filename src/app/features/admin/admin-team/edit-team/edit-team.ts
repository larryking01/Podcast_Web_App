import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamMembersService } from '../../../../core/services/team-members.service';
import { TeamMember } from '../../../../core/models/team-members.interface';
import { CommonModule } from '@angular/common';
import { AdminNavbar } from '../../../../shared/components/admin-navbar/admin-navbar';

@Component({
  selector: 'app-edit-team',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AdminNavbar],
  templateUrl: './edit-team.html',
  styleUrl: './edit-team.scss'
})
export class EditTeam implements OnInit {
  editTeamMemberForm!: FormGroup;
  teamMemberId!: number;
  teamMember!: TeamMember;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private teamMembersService: TeamMembersService
  ) {}

  ngOnInit(): void {
    this.teamMemberId = Number(this.route.snapshot.paramMap.get('id'));
    this.initForm();
    this.loadTeamMember();
  }

  initForm(): void {
    this.editTeamMemberForm = this.fb.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
      imageUrl: ['']
    });
  }

  loadTeamMember(): void {
    this.teamMembersService.getTeamMember(this.teamMemberId).subscribe({
      next: (response) => {
        this.teamMember = response.data;
        this.editTeamMemberForm.patchValue(this.teamMember);
      },
      error: (error) => {
        console.error('Error fetching team member:', error);
        // Handle error appropriately, e.g., navigate to an error page or show a message
      }
    });
  }

  onSubmit(): void {
    if (this.editTeamMemberForm.valid) {
      const updatedMemberData = this.editTeamMemberForm.value;
      this.teamMembersService.updateTeamMember(this.teamMemberId, updatedMemberData).subscribe({
        next: () => {
          this.router.navigate(['/admin/team']); // Navigate back to the team list
        },
        error: (error) => {
          console.error('Error updating team member:', error);
          // Handle error appropriately, e.g., show an error message to the user
        }
      });
    }
  }
}
