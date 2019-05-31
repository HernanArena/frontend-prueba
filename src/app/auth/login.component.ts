import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { Usuario } from '../models/usuario.model';
import * as fromUsuario from '../store/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:Usuario;
  loading:boolean;
  loaded:boolean;
  error:string;

  constructor(public store:Store<AppState>,
              public router:Router) { }

  ngOnInit() {
  }
  onSubmit(data:any){
    this.store.dispatch(new fromUsuario.CargarUsuario(data.usuario,data.password));
    this.store.select('usuario').subscribe( usuario=>{
      this.user = usuario.user;
      this.loaded = usuario.loaded;
      this.loading = usuario.loading;
      this.error = usuario.error;
      if(this.loaded === true){
        this.router.navigate(['/dashboard']);
      }
    })
  }
}
