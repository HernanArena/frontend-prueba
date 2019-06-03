import { Injectable, OnInit } from '@angular/core';
import {URL_SERVICES} from '../../config/config';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Usuario } from 'src/app/models/usuario.model';
import { Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService  implements OnInit{
  subscription:Subscription;
  usuario:Usuario;


  urlAPI = URL_SERVICES;
  constructor(private _http:HttpClient,
              public store:Store<AppState>) { }
  ngOnInit(): void {

  }

  login(uid:string,pwd:string){
    const headers = new HttpHeaders({
           'uid':`${uid}`,
           'pwd':`${pwd}`
         });
         console.log("Servicio ejecutado")
         console.log(`${this.urlAPI}/login`)
   return this._http.get(`${this.urlAPI}/login`,{headers});
  }
  guardarStorage(usuario:Usuario){
    localStorage.setItem('usuario',JSON.stringify(usuario));

    this.usuario.token = usuario.token;
    this.usuario.username = usuario.username;
    this.usuario.empresa.name = usuario.empresa.name;
    this.usuario.empresa.logo = usuario.empresa.logo;
    this.usuario.actions = usuario.actions;
    this.usuario.lastLogin = usuario.lastLogin;
  }
  logout(){
    this.usuario = null;
    localStorage.removeItem('usuario');
  }
  estaLogueado(){
    return this.usuario.token.length>0;
  }
  cargarStorage(){
    let token = localStorage.getItem('token')
    if(token){
      this.usuario =  JSON.parse(localStorage.getItem('usuario'));
    }else{
      this.usuario = null;
    }
  }
}
