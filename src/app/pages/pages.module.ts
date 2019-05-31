//module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

//components
import { DashboardComponent } from './dashboard/dashboard.component';


//Routes
import { PAGES_ROUTING } from './pages-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PAGES_ROUTING
  ],
  exports:[
    DashboardComponent
  ]
})
export class PagesModule { }
