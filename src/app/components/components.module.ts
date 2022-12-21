import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

import { IncrementComponent } from './increment/increment.component';
import { DonutComponent } from './donut/donut.component';

@NgModule({
  declarations: [
    IncrementComponent,
    DonutComponent
  ],
  exports: [
    IncrementComponent,
    DonutComponent
  ],
  imports: [
    FormsModule,
    NgChartsModule,
    CommonModule
  ]
})
export class ComponentsModule { }
