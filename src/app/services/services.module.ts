import { NgModule } from '@angular/core';
import { UsuarioService} from './services.index';
import { HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    UsuarioService
  ]
})
export class ServicesModule { }
