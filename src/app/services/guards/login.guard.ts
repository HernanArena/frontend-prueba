import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '..';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate  {
  constructor(public _us:UsuarioService,
              public _router:Router){}
  canActivate(): boolean {
    if(this._us.estaLogueado()){
      //console.log('Paso por el guard');
      return true
    }else{
      //console.log('Bloqueado por el guard');
      this._router.navigate(['/login']);
      return false;
    }
  }
}
