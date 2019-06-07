import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  datosbusqueda:any;
  recuperatermino:boolean;

  constructor() {
    localStorage.setItem('default', "true");//define si se ve el termino por defecto en el buscador
    console.log('Logueo desde el constructor: ' + this.recuperatermino);
  }

  ngOnInit() {
  }


}
