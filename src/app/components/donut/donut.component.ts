import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})

export class DonutComponent {

  // @Output() data: number = [];
  @Input() title: string = 'No title';
  @Input('labels') doughnutChartLabels: string[] = [ 'Label', 'In-Label', 'Mail-Label' ];
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ],
        backgroundColor: ['#6857E6','#009FEE','#F02059']}
    ]
  };

}
