import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminNavbar } from '../../../shared/components/admin-navbar/admin-navbar';
import { AdminSidebar } from '../../../shared/components/admin-sidebar/admin-sidebar';

@Component({
  selector: 'app-admin-dashboard',
  imports: [RouterModule, AdminNavbar, AdminSidebar],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss'
})
export class AdminDashboard {

}
