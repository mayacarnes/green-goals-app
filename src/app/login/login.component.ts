import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username = signal('');
  password = signal('');

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.username(), this.password()).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: err => alert(err.error?.message || 'Login failed')
    });
  }
}
