import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
declare function init_plugin();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {
  loaded:boolean = false;

  constructor(public store:Store<AppState>) {
    this.store.select('ui').subscribe(ui=>this.loaded = ui.isLoading);
  }
  ngOnInit() {
    init_plugin();
  }

}
