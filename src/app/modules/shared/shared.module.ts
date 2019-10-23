import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [    
  ],
  exports: [
    CommonModule,
    MaterialModule,
    ]
})
export class SharedModule { }
