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
    header = true;
    public lineChart = [];
    public year = [];
    csvForm: FormGroup;
    csvData: any[];

  constructor(private ngxCsvParser: NgxCsvParser, private http: HttpClient) {
  }

  @ViewChild('fileImportInput', { static: false }) fileImportInput: any;
  @ViewChild('csvForm') grantAccessForm: NgForm;


    ngOnInit() {
        // this.getFiles();

        // const dataPoints = [
        //     { y: 71 },
        //     { y: 55 },
        //     { y: 50 },
        //     { y: 65 },
        //     { y: 95 },
        //     { y: 68 },
        //     { y: 28 },
        //     { y: 34 },
        //     { y: 14 }
        // ];

        // const chart = new CanvasJS.Chart('chartContainer', {
        //     animationEnabled: true,
        //     title: {
        //         text: 'Basic Column Chart in Angular 6'
        //     },
        //     data: [{
        //         type: 'column',
        //         dataPoints : dataPoints
        //     }]
        // });
        // chart.render();
    }

    // getFiles() {
    //     this.http.get('assets/jan-mar-timetable.csv', {responseType: 'text'})
    //     // tslint:disable-next-line: deprecation
    //     .subscribe(
    //         data => {
    //             this.extractData(data)
    //          //   console.log(data);
    //         },
    //         error => {
    //             console.log(error);
    //         }
    //     );
    // }

    // private extractData(data: Response) {
    //     let csvData = data;
    //     console.log('csvData.length', csvData.length);
    //     while(csvData.length < 12){


    //     }
    //     const csvDataArr = csvData.split(',');

    //     let size = 11; 
    //     let arrayOfArrays = [];
    //     for (let i=0; i<csvDataArr.length; i+=size) {
    //         arrayOfArrays.push(csvDataArr.slice(i,i+size));
    //     }
    //     console.log(arrayOfArrays);

    // //    // console.log('res typeof ', typeof(data));
    // //     csvDataArr.forEach(element => {
    // //      //   console.log('element ', element);
    // //     });
    // //     console.log({csvDataArr});

    // //     const csvData = res['_body'] || '';
    // //     const allTextLines = csvData.split(/\r\n|\n/);
    // //     const headers = allTextLines[0].split(',');
    // //     const lines = [];

    // //     for ( let i = 0; i < allTextLines.length; i++) {
    // //         // split content based on comma
    // //         const data = allTextLines[i].split(',');
    // //         if (data.length === headers.length) {
    // //             const tarr = [];
    // //             for ( let j = 0; j < headers.length; j++) {
    // //                 tarr.push(data[j]);
    // //             }
    // //             lines.push(tarr);
    // //         }
    // //     }
    // //     this.csvData = lines;
    // //   }
    // //   private handleError (error: any) {
    // //     // In a real world app, we might use a remote logging infrastructure
    // //     // We'd also dig deeper into the error to get a better message
    // //     const errMsg = (error.message) ? error.message :
    // //       error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    // //     console.error(errMsg); // log to console instead
    // //     return errMsg;
    //   }
    // getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    //     let csvArr = [];

    //     for (let i = 1; i < csvRecordsArray.length; i++) {
    //       let curruntRecord = (<string>csvRecordsArray[i]).split(',');
    //       if (curruntRecord.length == headerLength) {
    //         let csvRecord: CSVRecord = new CSVRecord();
    //         csvRecord.id = curruntRecord[0].trim();
    //         csvRecord.firstName = curruntRecord[1].trim();
    //         csvRecord.lastName = curruntRecord[2].trim();
    //         csvRecord.age = curruntRecord[3].trim();
    //         csvRecord.position = curruntRecord[4].trim();
    //         csvRecord.mobile = curruntRecord[5].trim();
    //         csvArr.push(csvRecord);
    //       }
    //     }
    //     return csvArr;
    //   }
   // Your applications input change listener for the CSV File
   fileChangeListener($event: any): void {

    const files = $event.srcElement.files;
    this.header = (this.header as unknown as string) === 'true' || this.header === true;

    this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',' })
      // tslint:disable-next-line: deprecation
      .pipe().subscribe((result: Array<any>) => {
        console.log('Result', result);
        this.csvRecords = result;
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
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
