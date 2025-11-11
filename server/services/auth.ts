import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth';
  
  // Store user state
  user = signal<{ username: string, token: string } | null>(null);

  constructor(private http: HttpClient) {}

  register(username: string, email: string, password: string) {
    return this.http.post(`${this.apiUrl}/register`, { username, email, password });
  }

  login(email: string, password: string) {
    return this.http.post<{ token: string, username: string }>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap(res => {
          this.user.set(res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('username', res.username);
        })
      );
  }

  logout() {
    this.user.set(null);
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
