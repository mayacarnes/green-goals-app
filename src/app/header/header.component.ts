import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],  // <-- important for *ngIf and ngModel
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  @Input() title!: string;
  @Output() toggleSidebar = new EventEmitter<void>();

  username = '';
  password = '';

  constructor(public auth: AuthService) {}

  onLogin() {
    this.auth.login(this.username, this.password);
    this.username = '';
    this.password = '';
  }

  onLogout() {
    this.auth.logout();
  }

  toggle() {
    this.toggleSidebar.emit();
  }
}
