import { Component, inject, OnInit } from '@angular/core';
// import { Navbar } from '../../../shared/components/navbar/navbar';
import { Navbar } from '../../../shared/components/navbar/navbar';
import { Footer } from '../../../shared/components/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ Navbar, Footer, RouterModule ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {


  ngOnInit(): void {
    
  }

}
