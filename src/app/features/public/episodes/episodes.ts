import { Component, inject, OnInit, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { Navbar } from '../../../shared/components/navbar/navbar';
import { Footer } from '../../../shared/components/footer/footer';
import { EpisodeResponse } from '../../../core/models/episodes.interface';
import { EpisodesService } from '../../../core/services/episodes.service';
import { Episode } from '../../../core/models/episodes.interface';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { AudioPlayer } from '../../../core/services/audio-player';
import { PageHeader } from '../../../shared/components/page-header/page-header';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-episodes',
  imports: [Navbar, Footer, MatPaginatorModule,  PageHeader, RouterModule ],
  templateUrl: './episodes.html',
  styleUrl: './episodes.scss'
})
export class Episodes implements OnInit {

  episodes$: EpisodeResponse = {
    status: 'idle',
    data: [],
    meta: {
      total: 1,
      page: 1,
      last_page: 1
    }
  }

  episodeService = inject( EpisodesService )
  router = inject( Router )
  audioPlayer = inject( AudioPlayer )
  destroyRef = inject( DestroyRef )

  episodesArray: Episode[] = []         
  paginatedEpisodes: Episode [] = []   

  pageSize = 5
  currentPage = 0

  ngOnInit(): void {
    this.episodeService.getEpisodes()
    .pipe( takeUntilDestroyed( this.destroyRef ))
    .subscribe({
      next: ( episode: EpisodeResponse ) => {
        this.episodes$ = episode
        this.episodesArray = episode.data
        this.updatePaginatedEpisodes()
      }
    })
  }


  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize
    this.currentPage = event.pageIndex
    this.updatePaginatedEpisodes()
  }


  updatePaginatedEpisodes() {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedEpisodes = this.episodesArray.slice(start, end);
  }


  navigateToEpisodeDetails(episodeID: number) {
    this.router.navigate(['/episodes', episodeID])
  }


  onPlayClick( episode: Episode ) {
    this.audioPlayer.play( episode.audio_url, episode.title )
  }


}
