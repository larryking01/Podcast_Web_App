import { Component, inject, OnInit } from '@angular/core';
import { Footer } from '../../../shared/components/footer/footer';
import { Navbar } from '../../../shared/components/navbar/navbar';
import { EpisodesService } from '../../../core/services/episodes.service';
import { Episode } from '../../../core/models/episodes.interface';
import { EpisodeResponse } from '../../../core/models/episodes.interface';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-episode-details',
  imports: [Footer, Navbar],
  templateUrl: './episode-details.html',
  styleUrl: './episode-details.scss'
})
export class EpisodeDetails implements OnInit {

  episodesService = inject( EpisodesService )
  activatedRoute = inject( ActivatedRoute )
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
      .subscribe({
        next: (( selectedEpisode ) => {
          this.selectedEpisode = selectedEpisode
          console.log('selected episode = ', this.selectedEpisode )
        }),
        error: (( error ) => console.log('error fetching episode details = ', error))
      })
    }
    else {
      // display error banner here.
      alert('Failed to fetch episode details')
    }

  }


}
