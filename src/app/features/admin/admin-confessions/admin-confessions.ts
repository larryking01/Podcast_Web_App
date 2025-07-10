import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavbar } from '../../../shared/components/admin-navbar/admin-navbar';
import { ConfessionsService } from '../../../core/services/confessions.service';
import { AdminConfession, AdminConfessionResponse } from '../../../core/models/admin-confession.interface';
import { AdminSidebar } from '../../../shared/components/admin-sidebar/admin-sidebar';
@Component({
  selector: 'app-admin-confessions',
  standalone: true,
  imports: [AdminNavbar, CommonModule],
  templateUrl: './admin-confessions.html',
  styleUrl: './admin-confessions.scss'
})
export class AdminConfessions {
  confessions: AdminConfession[] = [];
  totalConfessions: number = 0;

  constructor(private confessionservice: ConfessionsService) {}

  ngOnInit(): void {
    this.getConfessions();
  }

  getConfessions(): void {
    this.confessionservice.getConfessions().subscribe(
      (response: AdminConfessionResponse) => {
        this.confessions = response.data;
        this.totalConfessions = response.meta?.total ?? 0;
      },
      error => {
        console.error('Error fetching total confessions:', error);
      }
    );
  }

  toggleConfessionApproval(id: number, isApproved: string): void {
    const newStatus = isApproved === '0' ? '1' : '0';
    this.confessionservice.toggleApproval(id).subscribe(
      (response) => {
        const confession = this.confessions.find(c => c.id === id);
        if (confession) {
          confession.is_approved = newStatus;
        }
      },
      error => {
        console.error(`Error toggling approval for confession ${id}:`, error);
      }
    );
  }
}
