import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import * as fromReducers from './reducers';
import { localStorageSync } from 'ngrx-store-localstorage';

export interface AppState{
  ui: fromReducers.State;
  usuario:fromReducers.UsuarioState;

}

export const appReducers:ActionReducerMap<AppState>= {
  ui: fromReducers.uiReducers,
  usuario: fromReducers.usuarioReducer
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['usuario'],rehydrate:true})(reducer);
}
export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
