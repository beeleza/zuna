import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Card } from './card/card';
import { Table } from './table/table';
import { Charts } from './charts/charts';

@Component({
  selector: 'app-dashboard',
  imports: [MatIconModule, MatCardModule, Card, Table, Charts],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
