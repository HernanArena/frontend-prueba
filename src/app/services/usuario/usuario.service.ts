import { Injectable } from '@angular/core';
import {URL_SERVICES} from '../../config/config';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Subscription } from 'rxjs';
// import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  PartesSubcription: Subscription = new Subscription();
  urlAPI = URL_SERVICES;
  constructor(private _http:HttpClient,
              public store:Store<AppState>) { }

  login(uid:string,pwd:string){
    const headers = new HttpHeaders({
           'uid':`${uid}`,
           'pwd':`${pwd}`
         });
         console.log("Servicio ejecutado")
         console.log(`${this.urlAPI}/login`)
   return this._http.get(`${this.urlAPI}/login`,{headers});
  }
  logout(){
//this.PartesSubcription = this.store.

  }
}
