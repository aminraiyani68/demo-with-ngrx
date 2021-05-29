import { Action, createReducer } from '@ngrx/store';
import { Region } from './model/region.model';

export interface RegionState {
  regions: Region[];
}

export const initialState: RegionState = {
  regions: [
    { name: 'Europe', value: 'europe', },
    { name: 'Asia', value: 'asia', },
  ]
};

export const _regionReducer = createReducer(initialState);

export function reducer(state: RegionState | undefined = initialState, action: Action): any {
  return _regionReducer(state, action);
}
