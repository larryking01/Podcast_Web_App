import { Component, inject, OnInit, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Navbar } from '../../../shared/components/navbar/navbar';
import { Footer } from '../../../shared/components/footer/footer';
import { PageHeader } from '../../../shared/components/page-header/page-header';
import { TeamMembersService } from '../../../core/services/team-members.service';
import { TeamMember } from '../../../core/models/team-members.interface';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-team-members',
  imports: [Navbar, Footer, PageHeader, RouterModule],
  templateUrl: './team-members.html',
  styleUrl: './team-members.scss'
})
export class TeamMembers implements OnInit {

  teamMembersService = inject( TeamMembersService )
  teamMembersArray: TeamMember[] = []
  studioImageUrl: string = ''
  destroyRef = inject( DestroyRef )


  studioImages = [
    { imageUrl: "https://media.istockphoto.com/id/1451776362/photo/microphone-in-a-professional-recording-or-radio-studio.jpg?s=612x612&w=0&k=20&c=r_mAh9ELEAgiTbqhxR7l2s7J-lJybFEm4Cweydg3bUg="},
    { imageUrl: "https://media.istockphoto.com/id/1355366945/photo/microphone-to-record-podcast-in-studio.jpg?s=612x612&w=0&k=20&c=LfBniHfGk12mGtvP9xyY0kUnEHAQonu_qfN8Osszg04="},
    {imageUrl: "https://media.istockphoto.com/id/1973173271/photo/man-responding-to-interviewer-at-podcast.jpg?s=612x612&w=0&k=20&c=lnu4m1mu3_MKH7n97P7p1DkHvCUI943YcO6DgZTLFWs="},
    { imageUrl: "https://media.istockphoto.com/id/922950626/photo/masters-of-show-in-telecasting-studio.jpg?s=612x612&w=0&k=20&c=EVDeRVZyKSnYWaJt9g3zS0Ji7oQqMcy1l1z-gWL95es="}
  ]

  ngOnInit(): void {
    this.teamMembersService.getAllTeamMembers()
    .pipe( takeUntilDestroyed( this.destroyRef ))
    .subscribe({
      next: ( teamMembersListResponse ) => {
        this.teamMembersArray = teamMembersListResponse.data
        console.log("team members fetched = ", this.teamMembersArray)
      }
    })


    let index = Math.floor(Math.random() * this.studioImages.length)
    this.studioImageUrl = this.studioImages[index].imageUrl

  }

}
