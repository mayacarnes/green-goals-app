import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside [style.width.px]="open ? 200 : 0" 
           style="background:#388e3c; overflow:hidden; transition:width 0.3s; color:white; height:100vh; position:fixed;">
      <ul style="list-style:none; padding:10px;">
        <li style="padding:8px 0; cursor:pointer;">Dashboard</li>
        <li style="padding:8px 0; cursor:pointer;">User</li>
        <li style="padding:8px 0; cursor:pointer;">Teams</li>
        <li style="padding:8px 0; cursor:pointer;">Challenges</li>
        <li style="padding:8px 0; cursor:pointer;">Leaderboard</li>
        <li style="padding:8px 0; cursor:pointer;">Reports</li>
        <li style="padding:8px 0; cursor:pointer;">Settings</li>
      </ul>
    </aside>
  `
})
export class SidebarComponent {
  @Input() open = false;
}
