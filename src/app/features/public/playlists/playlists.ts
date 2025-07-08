import { Component } from '@angular/core';
import { Navbar } from '../../../shared/components/navbar/navbar';
import { Footer } from '../../../shared/components/footer/footer';


@Component({
  selector: 'app-playlists',
  imports: [Navbar, Footer],
  templateUrl: './playlists.html',
  styleUrl: './playlists.scss'
})
export class Playlists {

}
