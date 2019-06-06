import { Injectable, OnInit } from '@angular/core';
import {URL_SERVICES} from '../../config/config';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Usuario } from 'src/app/models/usuario.model';
import { Subscription, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ActivarLoadingAction, DesactivarLoadingAction, CargarUsuario } from 'src/app/store/actions';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private subscription:Subscription = new Subscription();
  private usuario:Usuario;
  private urlAPI = URL_SERVICES;

  constructor(private http:HttpClient,
              public store:Store<AppState>,
              private router:Router) { }

  login(uid:string,pwd:string){
    this.store.dispatch(new ActivarLoadingAction());
    const headers = new HttpHeaders({
           'uid':`${uid}`,
           'pwd':`${pwd}`
         });
    console.log("Hola")
    this.http.get(`${this.urlAPI}/login`,{headers})
         .pipe(map((resp:any) =>{
           console.log(resp);
           this.router.navigate(['/']);
           this.store.dispatch(new DesactivarLoadingAction());
           this.store.dispatch(new CargarUsuario(resp.usuario));
         }))
         //  catchError( (error:any) => {
         //   this.store.dispatch(new DesactivarLoadingAction());
         // });
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
  renuevaToken(){
    let url = URL_SERVICES + '/login/renuevatoken';
    url+='?token='+this.usuario.token;
    return this.http.get(url)
      .pipe(map( (resp:any) => {
        this.usuario.token = resp.token
          localStorage.setItem('token',this.usuario.token);
          return true;
      }),
    catchError( err=>{
      this.router.navigate(['/login']);
      return throwError(err);
    }))
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
  actualizarUsuario(usuario:any){
    let url = URL_SERVICES +'/usuario/'+usuario._id;
    url+='?token='+this.usuario.token;
    return this.http.put(url, usuario)
      .pipe(map((resp:any)=>{
        if(usuario.username === this.usuario.username){
          let usuarioDB:Usuario = resp.usuario;
          this.guardarStorage(usuarioDB);
        }
        return true;
      }));
  }
}
