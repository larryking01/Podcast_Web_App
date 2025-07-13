import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  constructor() { }


  isDarkMode: boolean = false

  initializeTheme() {

  }

  setLightMode() {
    this.isDarkMode = document.body.classList.toggle("dark-mode", false)
    console.log("dark status = ", this.isDarkMode )
  }

  setDarkMode() {
    this.isDarkMode = document.body.classList.toggle("dark-mode", true)
    console.log("dark status = ", this.isDarkMode )

  }




}
