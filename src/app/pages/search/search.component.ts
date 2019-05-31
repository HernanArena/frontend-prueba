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


  constructor(private searchservice:SearchService) { }

  ngOnInit() {
    this.modulos = this.searchservice.getmodulos();
  }

  buscar(termino:string){
    console.log(termino);
    this.partes = this.searchservice.getpartesconfiltro(termino);
  }

  recuperarobjetos(moduloseleccionado:string){
    this.objetos = this.searchservice.getobjetosconfiltro(moduloseleccionado);
  }
}
