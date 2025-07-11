import { Component } from '@angular/core';
import { Navbar } from '../../../shared/components/navbar/navbar';
import { Footer } from '../../../shared/components/footer/footer';
import { PageHeader } from '../../../shared/components/page-header/page-header';


@Component({
  selector: 'app-playlists',
  imports: [Navbar, Footer, PageHeader],
  templateUrl: './playlists.html',
  styleUrl: './playlists.scss'
})
export class Playlists {

}
