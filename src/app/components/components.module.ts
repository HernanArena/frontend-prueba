import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinderComponent } from './finder/finder.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FinderComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FinderComponent
  ]
})
export class ComponentsModule { }
