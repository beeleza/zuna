import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [MatIconModule, RouterOutlet, RouterLink],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
