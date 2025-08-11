import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-layout',
  imports: [MatIconModule, RouterOutlet, RouterLink],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
  constructor(private authService: AuthService, private router: Router) {}

  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login'])
  }
}
