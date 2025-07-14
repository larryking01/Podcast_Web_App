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

  showHamburgerButton: boolean = false
  showCloseButton: boolean = false
  showSidebar: boolean = false

  

  ngOnInit(): void {
    this.showOrHideHamburgerBtn()
    this.hideSidebarOnResize()
  }


  showOrHideHamburgerBtn() {
    let currentScreenWidth = window.innerWidth
    if( currentScreenWidth < 768 ) {
        this.showHamburgerButton = true
    }
    else {
        this.showHamburgerButton = false
    }
  }


  hideSidebarOnResize() {
    window.addEventListener('resize', () => {
      if( window.innerWidth > 768 ) {
        this.showCloseButton = false
        this.showSidebar = false
        this.showHamburgerButton = false
      }
      else {
        if( this.showSidebar === true ) {
          this.showHamburgerButton = false
        }
        else {
          this.showHamburgerButton = true
        }
      }
    })
  }

  showSideBar() {
    this.showSidebar = true
    this.showHamburgerButton = false
    this.showCloseButton = true
  }

  closeSideBar() {
    this.showCloseButton = false
    this.showHamburgerButton = true
    this.showSidebar = false
  }


  setToDarkTheme() {
    this.themeService.setDarkMode()
  }


  setToLightTheme() {
    this.themeService.setLightMode()
  }



}
