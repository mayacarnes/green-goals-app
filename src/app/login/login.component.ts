import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Login</h2>
    <form (ngSubmit)="onLogin()">
      <label>Email:</label>
      <input type="email" [(ngModel)]="email" name="email" required />
      <br />
      <label>Password:</label>
      <input type="password" [(ngModel)]="password" name="password" required />
      <br />
      <button type="submit">Login</button>
    </form>
    <p *ngIf="error" style="color:red">{{ error }}</p>
  `
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    this.auth.login(this.email, this.password).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: (err) => this.error = err.error?.message || 'Login failed'
    });
  }
}
