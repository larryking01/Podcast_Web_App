import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { AudioPlayerComponent } from "./shared/components/audio-player-component/audio-player-component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Podcast_Web_App';
}
