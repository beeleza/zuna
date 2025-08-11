import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  imports: [MatCardModule, CurrencyPipe],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() totalTransactions!: number;
  @Input() totalIncome!: number;
  @Input() totalExpenses!: number;
  @Input() currentBalance!: number;
}
