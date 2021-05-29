import {
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';

import { environment } from 'src/environments/environment';
import * as fromRegion from '../regions/region.reducer';
import * as fromCountry from '../countries/country.reducer';

export interface AppState {
  readonly Region: fromRegion.RegionState;
  readonly Country: fromCountry.CountryState;
}

export const reducers: ActionReducerMap<AppState> = {
  Region: fromRegion.reducer,
  Country: fromCountry.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
