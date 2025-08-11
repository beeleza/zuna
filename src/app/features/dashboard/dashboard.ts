import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Card } from './card/card';
import { TransactionService } from '../../core/services/transactions.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, MatCardModule, Card],
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
    this.loadData();
  }

  loadData() {
    const now = new Date();

    // primeiro dia do mês atual
    const startDate = new Date(now.getFullYear(), now.getMonth(), 1);

    // ultimo dia do mês atual
    const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    // formatar para yyyy-MM-dd
    const startDateStr = startDate.toISOString().split('T')[0];
    const endDateStr = endDate.toISOString().split('T')[0];

    this.transactionService
      .getAll(1, 5, startDateStr, endDateStr)
      .subscribe((data) => {
        this.totalTransactions = data.summary.transactionCount;
        this.totalIncome = data.summary.totalIncome;
        this.totalExpenses = data.summary.totalExpense;
        this.currentBalance = data.summary.balance;
        this.transactions = data.transactions;
      });
  }

  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
