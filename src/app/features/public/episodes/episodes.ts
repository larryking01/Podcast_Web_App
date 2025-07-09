import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Navbar } from '../../../shared/components/navbar/navbar';
import { Footer } from '../../../shared/components/footer/footer';
import { EpisodeResponse } from '../../../core/models/episodes.interface';
import { EpisodesService } from '../../../core/services/episodes.service';
import { Episode } from '../../../core/models/episodes.interface';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-episodes',
  imports: [Navbar, Footer, MatPaginatorModule ],
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

  episodesArray: Episode[] = []         // all episodes from API
  paginatedEpisodes: Episode [] = []   // current page items

  pageSize = 5
  currentPage = 0

  ngOnInit(): void {
    this.episodeService.getEpisodes().subscribe({
      next: ( episode: EpisodeResponse ) => {
        this.episodes$ = episode
        console.log("episodes loaded = ", this.episodes$ )
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


}
