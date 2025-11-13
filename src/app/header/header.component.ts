import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  // In header.component.ts
template: `
  <header class="header">
    <button class="sidebar-toggle" (click)="toggle()">☰</button>
    
    <div class="brand">
      <span class="logo">🌱</span>
      <h1 class="title">{{ title }}</h1>
    </div>
    
    <div class="user-actions">
      <span *ngIf="auth.isLoggedIn()">Welcome, {{ auth.user()?.username }}!</span>
      <button *ngIf="auth.isLoggedIn()" (click)="auth.logout()" class="action-btn">
        Logout
      </button>
      <a *ngIf="!auth.isLoggedIn()" routerLink="/login" class="action-link">Login</a>
      <a *ngIf="!auth.isLoggedIn()" routerLink="/signup" class="action-link">Signup</a>
    </div>
  </header>
`,
styles: [`
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background: linear-gradient(135deg, #2e7d32 0%, #66bb6a 100%);
    color: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-grow: 1;
    justify-content: center;
  }
  .logo {
    font-size: 32px;
  }
  .title {
    margin: 0;
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 1px;
  }
  .sidebar-toggle {
    background: rgba(255,255,255,0.2);
    border: none;
    color: white;
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 18px;
    transition: background 0.3s;
  }
  .sidebar-toggle:hover {
    background: rgba(255,255,255,0.3);
  }
  .user-actions {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .action-btn, .action-link {
    background: rgba(255,255,255,0.2);
    border: none;
    color: white;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 20px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.3s;
  }
  .action-link:hover, .action-btn:hover {
    background: rgba(255,255,255,0.3);
    transform: translateY(-1px);
  }
`]

})
export class HeaderComponent {
  @Input() title: string = 'Loan Management App';
  @Output() toggleSidebar = new EventEmitter<void>();

  constructor(public auth: AuthService) {}

  toggle() {
    this.toggleSidebar.emit();
  }
}
