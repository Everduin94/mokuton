import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { BehaviorSubject } from 'rxjs';
import { Log } from 'src/app/dom-logger/dom-logger.service';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  testDataSet = new BehaviorSubject<any[]>([10, 11, 15]);
  
  @ViewChild('doughnut') donutEl: ElementRef;

  chart: Chart;

  dummyData = {
    datasets: [{
      data: this.testDataSet.value,
      backgroundColor: [
        'rgba(239, 51, 51, 0.83)',
        'rgba(239, 239, 51, 0.83)',
        'rgba(51, 145, 239, 0.83)',
    ],
    }],

    labels: ['Red', 'Yellow', 'Blue']
  };

  constructor() { }

  ngOnInit() {
    this.chart = new Chart(this.donutEl.nativeElement, {
      type: 'doughnut',
      data: this.dummyData,
      options: {
        maintainAspectRatio: false
      }
    });

    this.testDataSet.subscribe(val => {
      if (!val) { return; }
      this.chart.data.datasets.forEach(dataset => {
        dataset.data = val;
      })
      this.chart.update();
    })
  }

  incrementData() {
    const currentDataSet = this.testDataSet.value;
    const newDataSet = currentDataSet.map(val => {
      if (val !== 10) { return val + 1 }
      return 10; // Useless, fast way to test animation properly updating
    });
    this.testDataSet.next(newDataSet);
  }
}
