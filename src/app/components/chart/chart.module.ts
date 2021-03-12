import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart.component';
import { BaseChartDirective, ChartsModule } from 'ng2-charts';
import { SharedModule } from 'src/app/modules/shared/shared.module';


@NgModule({
  declarations: [BarChartComponent],
  imports: [
    CommonModule,
    SharedModule,
    BaseChartDirective,
  ]
})
export class ChartModule { }
