import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Dashboard</h2>
    <p>Welcome, {{ auth.user()?.username || 'User' }}!</p>
    <button (click)="auth.logout()">Logout</button>
  `
})
export class DashboardComponent {
  constructor(public auth: AuthService) {}
}
