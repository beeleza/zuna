import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

export interface DashboardSummary {
  totalTransactions: number;
  totalIncome: number;
  totalExpenses: number;
  currentBalance: number;
  transactions: Transaction[];
}

export interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  date: string;
  status: 'pending' | 'completed';
  userId: string;
  categoryId: string;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private readonly apiURL = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  getAll(): Observable<DashboardSummary> {
    return this.http.get<DashboardSummary>(`${this.apiURL}/transactions`)
  }
}
