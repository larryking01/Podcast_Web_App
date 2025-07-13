import { Component, inject, OnInit, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Navbar } from '../../../shared/components/navbar/navbar';
import { Footer } from '../../../shared/components/footer/footer';
import { PageHeader } from '../../../shared/components/page-header/page-header';
import { PlaylistsService } from '../../../core/services/playlists.service';
import { Playlist } from '../../../core/models/playlists.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-playlists',
  imports: [Navbar, Footer, PageHeader],
  templateUrl: './playlists.html',
  styleUrl: './playlists.scss'
})
export class Playlists implements OnInit {

  playListsService = inject( PlaylistsService )
  playListsArray: Playlist[] = []
  router = inject( Router )
  destroyRef = inject( DestroyRef )


  playListsBackground = [
    { imageUrl: 'https://png.pngtree.com/thumb_back/fh260/background/20241019/pngtree-abstract-music-notes-on-blue-background-image_16297270.jpg' },
    { imageUrl: 'https://t3.ftcdn.net/jpg/02/23/60/54/360_F_223605406_nGKtPp42ZRx4ZxvrcVeT3Ek6V5Uw4ETh.jpg' },
    { imageUrl: 'https://t3.ftcdn.net/jpg/07/50/00/54/360_F_750005429_WbnBmIlPPHM3F0jppU2d3naZrrFa0aDk.jpg' },
    { imageUrl: 'https://thumbs.dreamstime.com/b/abstract-colorful-music-wave-background-design-musical-notes-glowing-lights-generative-ai-highly-expressive-emotionally-375917114.jpg'},
    { imageUrl: 'https://freerangestock.com/sample/52585/colorful-music-background-shows-sounds-jazz-and-harmony-.jpg' },
    { imageUrl: 'https://img.freepik.com/free-vector/glowing-shiny-musical-notes-background-design_1017-32856.jpg?semt=ais_hybrid&w=740'}

  ]

  ngOnInit(): void {
    this.getAllPlaylists()
  }


  getRandomPlaylistBackground() {
    return this.playListsBackground[Math.floor(Math.random() * this.playListsBackground.length)].imageUrl
  }


  getAllPlaylists() {
    this.playListsService.getAllPlaylists()
    .pipe( takeUntilDestroyed( this.destroyRef ))
    .subscribe({
      next: ( playListsResponse ) => {
        console.log("playlists fetched = ", playListsResponse )
        this.playListsArray = playListsResponse.data.data
        this.playListsArray.map(( playListItem ) => playListItem.imageUrl = this.getRandomPlaylistBackground())
        console.log("play lists array = ", this.playListsArray)
      }
    })
  }


  navigateToEpisodeDetails(episodeID: number) {
    this.router.navigate(['/episodes', episodeID])
  }

}
