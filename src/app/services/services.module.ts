import { NgModule } from '@angular/core';
import { UsuarioService} from './services.index';
import { HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { SearchService } from './search/search.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    UsuarioService,
    SearchService
  ]
})
export class ServicesModule { }
