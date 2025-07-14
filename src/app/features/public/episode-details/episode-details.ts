import { Component, inject, OnInit, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Footer } from '../../../shared/components/footer/footer';
import { Navbar } from '../../../shared/components/navbar/navbar';
import { EpisodesService } from '../../../core/services/episodes.service';
import { Episode } from '../../../core/models/episodes.interface';
import { EpisodeResponse } from '../../../core/models/episodes.interface';
import { ActivatedRoute } from '@angular/router';
import { PageHeader } from '../../../shared/components/page-header/page-header';
import { AudioPlayer } from '../../../core/services/audio-player';



@Component({
  selector: 'app-episode-details',
  imports: [Footer, Navbar, PageHeader],
  templateUrl: './episode-details.html',
  styleUrl: './episode-details.scss'
})
export class EpisodeDetails implements OnInit {

  episodesService = inject( EpisodesService )
  activatedRoute = inject( ActivatedRoute )
  audioPlayerService = inject(AudioPlayer)
  destroyRef = inject( DestroyRef )
  selectedEpisodeID: string | null = null
  selectedEpisode: Episode | undefined = undefined



  episodes$: EpisodeResponse = {
    status: 'idle',
    data: [],
    meta: {
      total: 1,
      page: 1,
      last_page: 1
    }
  }


  episodesArray: Episode[] = []


  ngOnInit(): void {
    this.selectedEpisodeID = this.activatedRoute.snapshot.paramMap.get('id')
    if( this.selectedEpisodeID ) {
      this.episodesService.getEpisodeByID( Number.parseInt(this.selectedEpisodeID) )
      .pipe( takeUntilDestroyed( this.destroyRef ))
      .subscribe({
        next: (( selectedEpisode ) => {
          this.selectedEpisode = selectedEpisode
        }),
        error: (( error ) => console.log('error fetching episode details = ', error))
      })
    }
    else {
      alert('Failed to fetch episode details')
    }

  }


  onPlayClick( episode: Episode ) {
    this.audioPlayerService.play( episode.audio_url, episode.title )
  }

}
