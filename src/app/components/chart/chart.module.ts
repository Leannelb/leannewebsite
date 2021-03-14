import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [BarChartComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgxCsvParserModule,
    ReactiveFormsModule
  ]
})
export class ChartModule { }
