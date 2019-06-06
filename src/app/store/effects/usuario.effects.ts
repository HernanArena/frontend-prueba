import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {switchMap, map, catchError} from 'rxjs/operators';
import * as usuarioActions from '../actions/usuario.actions';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { of } from 'rxjs/internal/observable/of';
import {Usuario} from '../../models/usuario.model';

@Injectable()
export class UsuarioEffects {
  constructor(private actions$:Actions,
              public _us:UsuarioService){

  }
  // @Effect()
  // cargarUSuario$ = this.actions$
  //     .pipe(
  //       ofType(usuarioActions.CARGAR_USUARIO),
  //       switchMap(
  //         (action:usuarioActions.CargarUsuario) => this._us.login(action.uid,action.pwd)
  //         .pipe(
  //           map((user:Usuario) => new usuarioActions.CargarUsuarioSuccess(user)),
  //           catchError(error => of(new usuarioActions.CargarUsuarioFail(error))
  //         )
  //       )
  //     )
  //   );

}
