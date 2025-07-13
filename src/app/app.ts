import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemesService } from './core/services/themes-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Podcast_Web_App';

  constructor(private themeService: ThemesService ) {
    this.themeService.initializeTheme()
  }
  

}
