import { Component, Input } from '@angular/core';
import { AudioPlayerComponent } from '../audio-player-component/audio-player-component';

@Component({
  selector: 'app-page-header',
  imports: [ AudioPlayerComponent ],
  templateUrl: './page-header.html',
  styleUrl: './page-header.scss'
})
export class PageHeader {
  @Input() pageTitle: string = 'Welcome to the Podcast Hub'
  @Input() subTitle: string = 'Tune in, explore stories, and discover what’s trending.'


}
