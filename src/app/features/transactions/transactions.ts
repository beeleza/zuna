import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CurrencyPipe, DatePipe, SlicePipe } from '@angular/common';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogContentDialog } from './dialog/dialog-content';
import { Transaction, TransactionService } from '../../core/services/transactions.service';

@Component({
  selector: 'app-transactions',
  imports: [
    MatTableModule,
    CurrencyPipe,
    DatePipe,
    SlicePipe,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './transactions.html',
  styleUrl: './transactions.css',
})
export class Transactions implements OnInit {
  transactions: Transaction[] = [];
  displayedColumns: string[] = [
    'position',
    'descricao',
    'valor',
    'status',
    'data',
    'acoes'
  ];

  readonly dialog = inject(MatDialog);

  totalTransactions = 0;
  pageIndex = 0;
  pageSize = 10;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    // this.loadTransactions();
  }

  // loadTransactions() {
  //   this.transactionService
  //     .getAll(this.pageIndex + 1, this.pageSize)
  //     .subscribe((data: DashboardSummary) => {
  //       this.transactions = data.transactions;
  //       this.totalTransactions = data.totalTransactions; // usado pelo paginator
  //     });
  // }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    // this.loadTransactions();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
