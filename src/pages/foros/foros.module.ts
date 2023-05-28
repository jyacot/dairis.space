import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForosRoutingModule } from './foros-routing.module';
import { ForosComponent } from './foros.component';
import { SliderComponent } from './components/slider/slider.component';


@NgModule({
  declarations: [
    ForosComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    ForosRoutingModule
  ]
})
export class ForosModule { }
