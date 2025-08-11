import { Component, Input, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  template: `
    <div class="bg-white rounded-lg shadow-md p-4">
      <canvas
        baseChart
        [data]="barChartData"
        [type]="barChartType"
        [options]="barChartOptions"
        class="w-full h-full block"
      ></canvas>
    </div>
  `,
  standalone: true,
  imports: [BaseChartDirective],
})
export class Chart {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() labels: string[] = [];
  @Input() data: number[] = [];

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {},
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  public barChartType: ChartType = 'bar';

  // Atualiza o gráfico quando os inputs mudam
  get barChartData(): ChartData<'bar', number[], string | string[]> {
    return {
      labels: this.labels,
      datasets: [
        {
          data: this.data,
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
        },
      ],
    };
  }
}
