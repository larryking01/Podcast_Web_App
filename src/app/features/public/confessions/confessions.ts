import { Component } from '@angular/core';
import { Navbar } from '../../../shared/components/navbar/navbar';
import { Footer } from '../../../shared/components/footer/footer';


@Component({
  selector: 'app-confessions',
  imports: [Navbar, Footer],
  templateUrl: './confessions.html',
  styleUrl: './confessions.scss'
})
export class Confessions {

}
