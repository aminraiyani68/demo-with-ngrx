import { Action, createReducer, on } from '@ngrx/store';
import { countryActionTypes } from './country.actions';
import { Country } from './model/country.model';
export const countryFeatureKey = 'countries';

export interface CountryState {
  countryLoaded: boolean;
  loading: boolean;
  countries: Country[];
}
export const initialState: CountryState = {
  countryLoaded: false,
  loading: false,
  countries: []
};

export const _countryReducer = createReducer(
  initialState,
  on(countryActionTypes.loadCountries,
    (state: CountryState) => {
      return {
        ...state,
        loading: true,
      }
    }
  ),
  on(countryActionTypes.loadCountriesSuccess,
    (state: CountryState, action) => {
      return {
        ...state,
        countryLoaded: true,
        loading: false,
        countries: [...action.countries]
      }
    }
  )
);

export function reducer(state: CountryState | undefined = initialState, action: Action): any {
  return _countryReducer(state, action);
}
