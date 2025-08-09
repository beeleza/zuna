import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-charts',
  imports: [BaseChartDirective],
  templateUrl: './charts.html',
  styleUrl: './charts.css',
})
export class Charts {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      }
    },
  };
  public barChartType = 'bar' as const;

  public barChartData: ChartData<'bar'> = {
    labels: ['jan', 'fev', 'mar', 'mai', 'abri', 'jun', 'jul', 'ago'],
    datasets: [
      { data: [2518, 1518, 500, 2000, 2500, 1519, 2300, 1400], label: 'Entradas' },
      { data: [700, 300, 30, 800, 1000, 200, 900, 300], label: 'Despesas' },
    ],
  };
}
