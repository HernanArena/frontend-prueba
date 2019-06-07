import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinderService {

  datosbusqueda:any;

  constructor() {
    this.cargarStorage();
  }

  guardarStorage(DatosBusqueda:any){
    localStorage.setItem('datosbusqueda', JSON.stringify(DatosBusqueda));
  }

  cargarStorage(){
    this.datosbusqueda = JSON.parse(localStorage.getItem('datosbusqueda'));
  }
}
