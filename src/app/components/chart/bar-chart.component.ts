import { Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as CanvasJS from '../../../assets/canvasjs.min';
import {Chart} from 'chart.js';
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})


export class BarChartComponent implements OnInit {

    csvRecords: any[] = [];
    header = false;
    public lineChart = [];
    public year = [];
    csvForm: FormGroup;

  constructor(private ngxCsvParser: NgxCsvParser, private http: HttpClient) {
  }

  @ViewChild('fileImportInput', { static: false }) fileImportInput: any;
  @ViewChild('csvForm') grantAccessForm: NgForm;


    ngOnInit() {
        this.getFiles();
        
        const dataPoints = [
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

        const chart = new CanvasJS.Chart('chartContainer', {
            animationEnabled: true,
            title: {
                text: 'Basic Column Chart in Angular 6'
            },
            data: [{
                type: 'column',
                dataPoints : dataPoints
            }]
        });
        chart.render();
    }

    getFiles(){
    this.http.get('assets/jan-mar-timetable.csv', {responseType: 'text'})
    .subscribe(
        data => {
            console.log(data);
        },
        error => {
            console.log(error);
        }
    );
    }

      // Your applications input change listener for the CSV File
  fileChangeListener($event: any): void {

    // Select the files from the event
    const files = $event.srcElement.files;

    // Parse the file you want to select for the operation along with the configuration
    this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',' })
      // tslint:disable-next-line: deprecation
      .pipe().subscribe((result: Array<any>) => {

        console.log('Result', result);
        this.csvRecords = result;
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });

  }
  onSubmit(form) {
    console.log(form.value);
  }

    lineChat() {
        // for lebels all year removing dupliate
        const uniqueYear = this.year.filter((elem, index, self) => {
            return index === self.indexOf(elem);
        });
        // year Ascending
        uniqueYear.sort();
        // line chart data array object list collect from handleFileInput()
        const data = this.lineChart;
        // Line chart:
        this.lineChart = new Chart('lineChart', {
            type: 'line',
            data: {
                labels: uniqueYear,
                datasets: data,
            },
            options: {
                title: {
                    text: 'Line Chart',
                    display: true
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false
                        }
                    }]
                }
            }
        });
    }

    handleFileInput(files) {
        const file = files[0];
        const regex = new RegExp('(.*?)\.(csv)$');
        // file validation
        if (regex.test(file.name)) {
            const reader = new FileReader();
            const self = this;
            reader.onload = function (e) {
                if (reader.result) {
                    const data = [];
                    const yyyy = [];
                    const color = ['blue', 'purple', 'red', 'green', 'pink', 'yellow'];
                    const contents = reader.result;
                    // all data converting to array using line break from string
                    const lines = (<string>contents).split('\n');
                    // remove last empty item in array
                    lines.pop();
                    // series loop
                    // for (let i = 0; i < lines.length; i++) {
                    //     // line chart data object
                    //     let output = {
                    //         label: "",
                    //         data: [],
                    //         fill: false,
                    //         lineTension: 0.2,
                    //         borderColor: "",
                    //         backgroundColor: "",
                    //         borderWidth: 2
                    //     }
                    //     let yearScore = lines[i].split(",");
                    //     const name = yearScore[0];
                    //     output.label = name;
                    //     output.borderColor = color[i];
                    //     output.backgroundColor = color[i];
                    //     yearScore.shift();
                    //     // year and score collection loop in series loop
                    //     for (let j = 0; j < yearScore.length; j++) {
                    //         let items = yearScore[j];
                    //         let item = (<string>items).split("|");
                    //         let score = item[1];
                    //         let year = item[0];
                    //         // avoid duplicate year
                    //         let duplicateYear = output.data.filter(el => el.x == year);
                    //         if (duplicateYear.length == 0) {
                    //             // pushing  x & y object into data array
                    //             output.data.push({ x: year, y: parseInt(score) })
                    //             // taking all year in one array
                    //             yyyy.push(year)
                    //         }
                    //     }
                    //     // Ascending: first year less than the previous
                    //     output.data = output.data.sort(function (obj1, obj2) {
                    //         return obj1.x - obj2.x;
                    //     });
                    //     data.push(output);
                    // }
                    // assign to class property
                    self.year = yyyy;
                    self.lineChart = data;
                }
            };
            reader.readAsText(file);
        } else {
            alert('File not supported!');
        }
    }
}
