import { createReducer, on } from '@ngrx/store';
import { heroeAction } from './hero.actions';

 
export const initialState = [];
 
const _heroeReducer = createReducer(
  initialState,
  on(heroeAction, (state, {texto}) => [...state, texto]),
);
 
export function heroeReducer(state, action) {
  return _heroeReducer(state, action);
}