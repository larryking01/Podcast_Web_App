import { Component, inject, OnInit } from '@angular/core';
import { Footer } from '../../../shared/components/footer/footer';
import { Navbar } from '../../../shared/components/navbar/navbar';
import { EpisodesService } from '../../../core/services/episodes.service';

@Component({
  selector: 'app-episode-details',
  imports: [Footer, Navbar],
  templateUrl: './episode-details.html',
  styleUrl: './episode-details.scss'
})
export class EpisodeDetails implements OnInit {

  episodesService = inject( EpisodesService )


  ngOnInit(): void {
    
  }


}
