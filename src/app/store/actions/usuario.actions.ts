import {Action} from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const CARGAR_USUARIO = '[Login Usuario] Cargar usuario';
export const CARGAR_USUARIO_FAIL = '[Login Usuario] Cargar usuario FAIL';
export const CARGAR_USUARIO_SUCCESS = '[Login Usuario] Cargar usuario SUCCESS';

export const LIMPIAR_USUARIO = '[Logout Usuario] Limpiar usuario';
export const LIMPIAR_USUARIO_FAIL = '[Logout Usuario] Limpiar usuario FAIL';
export const LIMPIAR_USUARIO_SUCCESS = '[Logout Usuario] Limpiar usuario SUCCESS';

//Login
export class CargarUsuario implements Action{
  readonly type = CARGAR_USUARIO;
  constructor(public uid: string,public pwd:string){}
}

export class CargarUsuarioFail implements Action{
  readonly type = CARGAR_USUARIO_FAIL;
  constructor(public payload:any){}
}

export class CargarUsuarioSuccess implements Action{
  readonly type = CARGAR_USUARIO_SUCCESS;
  constructor(public usuario:Usuario){}
}

//Logout
export class LimpiarUsuario implements Action{
  readonly type = LIMPIAR_USUARIO;
}

export class LimpiarUsuarioFail implements Action{
  readonly type = LIMPIAR_USUARIO_FAIL;
  constructor(public payload:any){}
}

export class LimpiarUsuarioSuccess implements Action{
  readonly type = LIMPIAR_USUARIO_SUCCESS;
}

export type usuarioAcciones = CargarUsuario |
                               CargarUsuarioFail|
                               CargarUsuarioSuccess|
                               LimpiarUsuario|
                               LimpiarUsuarioFail|
                               LimpiarUsuarioSuccess;
