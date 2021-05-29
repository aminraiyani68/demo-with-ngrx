import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { countryActionTypes } from './country.actions';
import { CountryService } from './services/countries.service';

@Injectable()
export class CountryEffects {
  constructor(private countryService: CountryService, private actions$: Actions) { }

  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(countryActionTypes.loadCountries),
      delay(300),
      concatMap((action) => {
        const { region } = action;
        return this.countryService.getCountries(region)
      }),
      map(countries => countryActionTypes.loadCountriesSuccess({ countries })),
    )
  );
}