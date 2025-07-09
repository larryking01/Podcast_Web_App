import { Component } from '@angular/core';
import { Footer } from '../../../shared/components/footer/footer';
import { Navbar } from '../../../shared/components/navbar/navbar';

@Component({
  selector: 'app-episode-details',
  imports: [Footer, Navbar],
  templateUrl: './episode-details.html',
  styleUrl: './episode-details.scss'
})
export class EpisodeDetails {

}
