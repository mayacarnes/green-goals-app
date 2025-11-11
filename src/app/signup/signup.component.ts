import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  username = signal('');
  password = signal('');

  constructor(private auth: AuthService, private router: Router) {}

  signup() {
    this.auth.signup(this.username(), this.password()).subscribe({
      next: () => this.router.navigate(['/login']),
      error: err => alert(err.error?.message || 'Signup failed')
    });
  }
}
