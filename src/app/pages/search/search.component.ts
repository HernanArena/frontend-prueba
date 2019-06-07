import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  partes:any = "";
  modulos:any[] = [];
  objetos:any[] = [];
  recuperatermino:boolean;

  _moduloseleccionado:string ="";
  _objetoseleccionado:any = "";
  _versionseleccionada:any = "";


  constructor(private searchservice:SearchService) {
    this.recuperatermino = false;
    this.modulos = this.searchservice.getmodulos();
    localStorage.setItem('default', "false");//define si se ve el termino por defecto en el buscador
  }

  ngOnInit() {
  };

  recuperarobjetos(modulo:string){
    this.objetos = this.searchservice.getobjetosconfiltro(modulo);
  }
}
