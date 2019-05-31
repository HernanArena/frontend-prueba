//module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

//components
import { DashboardComponent } from './dashboard/dashboard.component';


//Routes
import { PAGES_ROUTING } from './pages-routing.module';
import { SearchComponent } from './search/search.component';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SearchComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PAGES_ROUTING,
    ComponentsModule
  ],
  exports:[
    DashboardComponent,
    SearchComponent
  ]
})
export class PagesModule { }
