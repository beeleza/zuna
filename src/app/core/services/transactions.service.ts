import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ApiResponse {
  transactions: Transaction[];
  summary: {
    totalIncome: number;
    totalExpense: number;
    balance: number;
    transactionCount: number;
  };
  pagination: {
    page: number;
    limit: number;
    totalPages: number;
    totalItems: number;
  };
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
  category?: {
    id: string;
    name: string;
    color: string;
    userId: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private readonly apiURL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(
    page: number = 1,
    limit: number = 5,
    startDate?: string,
    endDate?: string
  ): Observable<ApiResponse> {
    const params: any = {
      page: page.toString(),
      limit: limit.toString(),
    };

    if (startDate) params.startDate = startDate;
    if (endDate) params.endDate = endDate;

    return this.http.get<any>(`${this.apiURL}/transactions`, { params });
  }
}
