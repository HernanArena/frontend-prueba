import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '..';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements  CanActivate{
  constructor(public _us:UsuarioService){ }
  canActivate(){
      // if(this._us.usuario.role === "ADMIN_ROLE"){
      //   return true;
      // }else{
      //   console.log("Bloqueado por el Guard");
      //   this._us.logout();
      //   return false;
      //}
      return false;
  }
}
