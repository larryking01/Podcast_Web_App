import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  constructor() { }


  isDarkMode: boolean = false

  initializeTheme() {
    let preferredTheme = localStorage.getItem("theme-class")
    if( preferredTheme ) {
      document.body.classList.toggle("dark-mode", true)
      this.isDarkMode = true
    }
    else {
      document.body.classList.toggle("dark-theme", false)
      this.isDarkMode = false
    }
  }

  setLightMode() {
    this.isDarkMode = document.body.classList.toggle("dark-mode", false)
    localStorage.removeItem("theme-class")
  }

  setDarkMode() {
    this.isDarkMode = document.body.classList.toggle("dark-mode", true)
    localStorage.setItem("theme-class", "dark-mode")

  }

}
