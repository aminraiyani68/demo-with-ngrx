
import { createAction, props } from "@ngrx/store";

import { LOAD_COUNTRIES, LOAD_COUNTRIES_FAIL, LOAD_COUNTRIES_SUCCESS } from "./country.constants";
import { Country } from "./model/country.model";

export const loadCountries = createAction(LOAD_COUNTRIES, props<{ region: string }>());

export const loadCountriesFail = createAction(LOAD_COUNTRIES_FAIL)

export const loadCountriesSuccess = createAction(
    LOAD_COUNTRIES_SUCCESS,
    props<{ countries: Country[] }>()
);

export const countryActionTypes = {
    loadCountries,
    loadCountriesFail,
    loadCountriesSuccess,
};