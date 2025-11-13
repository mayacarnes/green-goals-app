import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Signup</h2>
    <form (ngSubmit)="onSignup()">
      <label>Username:</label>
      <input type="text" [(ngModel)]="username" name="username" required />
      <br />
      <label>Email:</label>
      <input type="email" [(ngModel)]="email" name="email" required />
      <br />
      <label>Password:</label>
      <input type="password" [(ngModel)]="password" name="password" required />
      <br />
      <button type="submit">Signup</button>
    </form>
    <p *ngIf="error" style="color:red">{{ error }}</p>
  `
})
export class SignupComponent {
  username = '';
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSignup() {
    this.auth.signup(this.username, this.email, this.password).subscribe({
      next: () => this.router.navigate(['/login']),
      error: (err) => this.error = err.error?.message || 'Signup failed'
    });
  }
}
