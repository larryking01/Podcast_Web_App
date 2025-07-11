import { Component } from '@angular/core';
import { Navbar } from '../../../shared/components/navbar/navbar';
import { Footer } from '../../../shared/components/footer/footer';
import { RouterModule } from '@angular/router';
import { AudioPlayerComponent } from '../../../shared/components/audio-player-component/audio-player-component';


@Component({
  selector: 'app-home',
  imports: [ Navbar, Footer, RouterModule, AudioPlayerComponent ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
