import { Component, HostListener, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  imports: [MatIconModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
