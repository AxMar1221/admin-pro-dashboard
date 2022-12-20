import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IncrementComponent } from './increment/increment.component';

@NgModule({
  declarations: [
    IncrementComponent
  ],
  exports: [
    IncrementComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class ComponentsModule { }
