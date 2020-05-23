import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import {MatIconModule} from '@angular/material/icon'; 

import {MatInputModule} from '@angular/material/input'; 

@NgModule({
  imports: [
    CommonModule,
    // MatButtonModule,
    // MatMenuModule,
    // MatToolbarModule,
    // MatInputModule,
    // MatIconModule
    ],
    exports: [
      CommonModule,
      // MatButtonModule,
      // MatMenuModule,
      // MatToolbarModule,
      // MatInputModule,
      MatIconModule
    ],
  declarations: []
})
export class MaterialModule { }
