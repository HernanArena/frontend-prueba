import { ActionReducerMap } from '@ngrx/store';
import * as fromReducers from './reducers';

export interface AppState{
  ui: fromReducers.State;
  usuario:fromReducers.UsuarioState;

}

export const appReducers:ActionReducerMap<AppState>= {
  ui: fromReducers.uiReducers,
  usuario: fromReducers.usuarioReducer
}
