import { Component, inject, OnInit, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Navbar } from '../../../shared/components/navbar/navbar';
import { Footer } from '../../../shared/components/footer/footer';
import { RouterModule } from '@angular/router';
import { AudioPlayerComponent } from '../../../shared/components/audio-player-component/audio-player-component';
import { EpisodesService } from '../../../core/services/episodes.service';
import { Episode } from '../../../core/models/episodes.interface';
import { AudioPlayer } from '../../../core/services/audio-player';
import { PlaylistsService } from '../../../core/services/playlists.service';
import { Playlist } from '../../../core/models/playlists.interface';
import { TeamMember } from '../../../core/models/team-members.interface';
import { TeamMembersService } from '../../../core/services/team-members.service';


@Component({
  selector: 'app-home',
  imports: [ Navbar, Footer, RouterModule, AudioPlayerComponent ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  episodesService = inject( EpisodesService )
  playListsService = inject( PlaylistsService )
  audioPlayer = inject( AudioPlayer )
  teamMembers = inject(TeamMembersService)

  episodesArray: Episode[] = []
  latestEpisodes: Episode[] = []
  playlistsArray: Playlist[] = []
  teamMembersArray: TeamMember[] = []


  destroyRef = inject( DestroyRef )







  ngOnInit() : void {
    this.getRecentEpisodes()
    this.getFewPlayLists()
    this.getTeamMembers()
  }


  getRecentEpisodes() {
    this.episodesService.getEpisodes()
    .pipe( takeUntilDestroyed( this.destroyRef ))
    .subscribe({
      next: ( episodeResponse ) => {
        this.episodesArray = episodeResponse.data
        console.log("all episodes fetched = ", this.episodesArray)
        this.latestEpisodes = [ ...this.episodesArray ]
        .sort((a,b) => {
          const dateA = new Date(a.posted_on?? 0).getTime()
          const dateB = new Date(b.posted_on ?? 0).getTime()
          return dateB - dateA
        } )
          .slice(0, 5)
          console.log("latest episodes = ", this.latestEpisodes)
      }
    })
  }


  getFewPlayLists() {
    this.playListsService.getAllPlaylists()
    .pipe( takeUntilDestroyed( this.destroyRef ))
    .subscribe({
      next: ( playListsResponse ) => {
        console.log("play lists response = ", playListsResponse )
        this.playlistsArray = playListsResponse.data.data
        console.log("play lists array = ", this.playlistsArray )
      }
    })
  }


  getTeamMembers() {
    this.teamMembers.getAllTeamMembers()
    .pipe( takeUntilDestroyed( this.destroyRef ))
    .subscribe({
      next: ( teamMembersResponse ) => {
        console.log( "team members fetched = ", teamMembersResponse )
        this.teamMembersArray = teamMembersResponse.data
        console.log("team members array = ", this.teamMembersArray )
      }
    })
  }

  onPlayClick( episode: Episode ) {
    this.audioPlayer.play( episode.audio_url, episode.title )
  }

}
