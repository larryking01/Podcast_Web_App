import { Component } from '@angular/core';
import { Navbar } from '../../../shared/components/navbar/navbar';
import { Footer } from '../../../shared/components/footer/footer';

@Component({
  selector: 'app-episodes',
  imports: [Navbar, Footer],
  templateUrl: './episodes.html',
  styleUrl: './episodes.scss'
})
export class Episodes {

}
