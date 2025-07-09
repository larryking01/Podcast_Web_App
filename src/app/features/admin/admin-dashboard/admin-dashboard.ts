import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminNavbar } from '../../../shared/components/admin-navbar/admin-navbar';
import { AdminSidebar } from '../../../shared/components/admin-sidebar/admin-sidebar';

@Component({
  selector: 'app-admin-dashboard',
  imports: [RouterModule, AdminNavbar, AdminSidebar],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss'
})
export class AdminDashboard implements OnInit {
  currentUser: any = null; 
  username: string = '';

  ngOnInit(): void {
    const currentUserJson = localStorage.getItem('currentUser');
    if (currentUserJson) {
      this.currentUser = JSON.parse(currentUserJson);
      this.username = this.currentUser.name;
    }
  }
}
