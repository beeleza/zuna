import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Card } from './card/card';
import { Table } from './table/table';
import { TransactionService } from '../../services/transactions.service';

@Component({
  selector: 'app-dashboard',
  imports: [MatIconModule, MatCardModule, Card, Table],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  totalTransactions = 0;
  totalIncome = 0;
  totalExpenses = 0;
  currentBalance = 0;
  transactions: any[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.transactionService.getAll().subscribe((data) => {
      this.totalTransactions = data.totalTransactions;
      this.totalIncome = data.totalIncome;
      this.totalExpenses = data.totalExpenses;
      this.currentBalance = data.currentBalance;
      this.transactions = data.transactions;
    });
  }

  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
