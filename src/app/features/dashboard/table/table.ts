import { Component, Input, OnChanges } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CurrencyPipe, DatePipe, SlicePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-table',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    SlicePipe,
    CurrencyPipe,
    DatePipe,
    MatButtonModule,
  ],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table implements OnChanges {
  @Input() transactions: any[] = [];

  displayedColumns: string[] = [
    'position',
    'description',
    'amount',
    'status',
    'date',
  ];
  dataSource = new MatTableDataSource<any>([]);

  ngOnChanges() {
    // Sempre que mudar o input, atualiza o dataSource
    this.dataSource.data = this.transactions;
  }
}
