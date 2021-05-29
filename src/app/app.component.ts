import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from './store/reducers';
import { Store } from '@ngrx/store';
import { Region } from './store/regions/model/region.model';
import { Country } from './store/countries/model/country.model';
import { countryActionTypes } from './store/countries/country.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  // Angular variables
  regionList: Region[] = [];
  countryList: Country[] = [];
  selectedCountry: any = null;
  countryLoading = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.initStoreSubscribe()
  }

  initStoreSubscribe = () => {
    this.store.select(appState => appState.Region.regions).subscribe(regions => {
      this.regionList = regions;
    });

    this.store.select(appState => appState.Country.loading).subscribe(loading => {
      this.countryLoading = loading;
    });

    this.store.select(appState => appState.Country.countries).subscribe(countries => {
      this.countryList = countries;
    });

  }

  displayedColumns: string[] = ['name', 'capital', 'population', 'currencies', 'flag'];
  dataSource: any = [];

  // Page events
  onRegionChange = (e: any) => {
    const region = e.value;
    this.selectedCountry = null;
    this.dataSource = [];
    this.store.dispatch(countryActionTypes.loadCountries({ region }));
  };

  onCountryChange = (e: any) => {
    const numericCode = e.value;
    this.selectedCountry = this.countryList.find((co) => {
      return co.numericCode === numericCode;
    });
    this.dataSource = [this.selectedCountry];
  };

  ngOnDestroy() {
    // we can un subscribe to observable subscription here, since it is just demo I didn't implement that
  }
}
