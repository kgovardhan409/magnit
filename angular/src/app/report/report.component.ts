import { Component, Input, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { SurveyService } from '../service/survey.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  @Input("resultSet") data: any;

  result: any;

  name = 'Angular   6';
  canvas: any;
  ctx: any;

  @ViewChild('mychart') mychart: { nativeElement: any; } | undefined;


  ngOnChanges(SimpleChanges: any){
    this.result = SimpleChanges.data.currentValue;
    // this.ngAfterViewInit(this.result)
  }

  ngAfterViewInit(data: any) {
    console.log(data);
    this.canvas = this.mychart?.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    let myChart = new Chart(this.ctx, {
      
      type: 'pie',

      data:{
      labels: ['company\’s culture', 'valued for your contributions', 'Benefits offered by the organization'],
      datasets: [
        {
          label: 'Dataset 1',
          data:[this.result[2].employeeEngagementIndex[0], this.result[2].employeeEngagementIndex[1], this.result[2].employeeEngagementIndex[2]],
          backgroundColor: ['red', 'blue', 'orange'],
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Chart.js Pie Chart'
        }
      }
    },
    });
  }
}
