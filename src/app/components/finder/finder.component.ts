import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent implements OnInit {
  partes:any;
  constructor(private searchservice:SearchService) { }

  ngOnInit() {
  }

  buscar(termino:string){
    console.log(termino);
    this.partes = this.searchservice.getpartesconfiltro(termino);
  }

}
