import { Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import * as CanvasJS from '../../../assets/canvasjs.min';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent implements OnInit {
    ngOnInit() {
        let dataPoints = [
            { y: 71 },
            { y: 55 },
            { y: 50 },
            { y: 65 },
            { y: 95 },
            { y: 68 },
            { y: 28 },
            { y: 34 },
            { y: 14 }
        ];
        
        let chart = new CanvasJS.Chart("chartContainer",{
            animationEnabled: true,
            title:{
                text: "Basic Column Chart in Angular 6"
            },
            data: [{
                type: "column",
                dataPoints : dataPoints
            }]
        });
        chart.render();
    }
}
