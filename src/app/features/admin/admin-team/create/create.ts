import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TeamMembersService } from '../../../../core/services/team-members.service';
import { TeamMember } from '../../../../core/models/team-members.interface'; // Assuming this path is correct
import { CommonModule } from '@angular/common';
import { AdminNavbar } from '../../../../shared/components/admin-navbar/admin-navbar';
@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule, CommonModule, AdminNavbar], // Added ReactiveFormsModule
  templateUrl: './create.html',
  styleUrl: './create.scss'
})
export class CreateTeam {
  teamMemberForm!: FormGroup;
  serverErrorMessages: string[] = []; // Property to store server errors

  constructor(
    private fb: FormBuilder,
    private teamMembersService: TeamMembersService
  ) { }

  ngOnInit(): void {
    this.teamMemberForm = this.fb.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
      bio: ['', Validators.required],
      profile_image: [''], // Corrected property name
      social_media_links: [''] // Corrected property name, assuming single link for now
    });
  }

  onSubmit(): void {
    if (this.teamMemberForm.valid) {
      // Create a new TeamMember object from the form value
      const newMember: Omit<TeamMember, 'id'> = {
        name: this.teamMemberForm.value.name,
        role: this.teamMemberForm.value.role,
        bio: this.teamMemberForm.value.bio,
        profile_image: this.teamMemberForm.value.profile_image || null, // Corrected property name
        social_media_links: this.teamMemberForm.value.social_media_links ? [{ platform: 'general', url: this.teamMemberForm.value.social_media_links }] : [] // Corrected property name and structure for social media links
      };

      this.teamMembersService.createTeamMember(newMember).subscribe({
        next: (response) => {
          // Optionally reset form or navigate away
          this.teamMemberForm.reset();
          // TODO: Add navigation or success message
        },
        error: (error) => {
          console.error('Error creating team member:', error);
          // TODO: Handle error display to the user
          // Extract error messages from the response
          if (error.error && error.error.message) {
            this.serverErrorMessages = Array.isArray(error.error.message) ? error.error.message : [error.error.message];
          } else if (error.error && error.error.errors) {
            // Handle validation errors that might be in an 'errors' object
            // Ensure values are strings before assigning
            this.serverErrorMessages = Object.values(error.error.errors).map(String);
          } else {
            this.serverErrorMessages = ['An unknown error occurred. Please try again.'];
          }
        }
      });
    } else {
      // Mark all fields as touched to display validation errors
      this.teamMemberForm.markAllAsTouched();
    }
  }
}
