import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemesService } from '../../../core/services/themes-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar implements OnInit {

  themeService = inject( ThemesService )

  ngOnInit(): void {
    
  }


  setToDarkTheme() {
    this.themeService.setDarkMode()
  }


  setToLightTheme() {
    this.themeService.setLightMode()
  }



}
