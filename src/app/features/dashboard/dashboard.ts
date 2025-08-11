import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Card } from './card/card';
import { TransactionService } from '../../core/services/transactions.service';
import { Chart } from './chart/chart';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, MatCardModule, Card, Chart],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  totalTransactions = 0;
  totalIncome = 0;
  totalExpenses = 0;
  currentBalance = 0;
  transactions: any[] = [];

  public chartLabels = ['Receitas', 'Despesas', 'Saldo'];
  public chartData = [0, 0, 0];

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    const now = new Date();
    const startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);

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

        this.chartData = [
          this.totalIncome,
          this.totalExpenses,
          this.currentBalance,
        ];
      });
  }

  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
