import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinderComponent } from './finder/finder.component';

@NgModule({
  declarations: [FinderComponent],
  imports: [
    CommonModule
  ],
  exports:[
    FinderComponent
  ]
})
export class ComponentsModule { }
