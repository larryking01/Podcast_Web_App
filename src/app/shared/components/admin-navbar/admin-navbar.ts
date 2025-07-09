import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  imports: [],
  templateUrl: './admin-navbar.html',
  styleUrl: './admin-navbar.scss'
})
export class AdminNavbar {

  @Input() name: string = '';

}
