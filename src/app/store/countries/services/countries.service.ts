import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../model/country.model';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) { }

  getCountries(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`https://restcountries.eu/rest/v2/region/${region}`);
  }
}