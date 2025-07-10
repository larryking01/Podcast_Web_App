import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './admin-navbar.html',
  styleUrl: './admin-navbar.scss'
})
export class AdminNavbar {
    username: string = '';
    isDarkMode: boolean = false;

    ngOnInit(): void {
        const currentUserJson = localStorage.getItem('currentUser');
        if (currentUserJson) {
            const currentUser = JSON.parse(currentUserJson);
            this.username = currentUser.name;
        }

        // Apply theme from localStorage on initialization
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            this.isDarkMode = true;
            document.body.classList.add('dark-theme');
        } else {
            this.isDarkMode = false;
            document.body.classList.remove('dark-theme');
        }
    }

    toggleTheme(): void {
        this.isDarkMode = !this.isDarkMode;
        if (this.isDarkMode) {
            document.body.classList.add('dark-theme');
            console.log('Dark theme applied. Body class:', document.body.classList);
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            console.log('Light theme applied. Body class:', document.body.classList);
            localStorage.setItem('theme', 'light');
        }
    }
}
