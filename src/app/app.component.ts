import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // Angular variables
  regionOptions = [
    {
      display: 'Europe',
      value: 'europe',
      id: 1,
    },
    {
      display: 'Asia',
      value: 'asia',
      id: 2,
    },
  ];

  countryOptions = [
    {
      name: 'India',
      display: 'India',
      value: 'india',
      capital: 'New Delhi',
      population: 1295210000,
      currencies: [
        {
          code: 'INR',
          name: 'Indian rupee',
          symbol: '₹',
        },
      ],
      flag: 'https://restcountries.eu/data/ind.svg',
    },
    {
      name: 'Indonesia',
      display: 'Indonesia',
      value: 'indonesia',
      capital: 'Jakarta',
      population: 258705000,
      currencies: [
        {
          "code": "IDR",
          "name": "Indonesian rupiah",
          "symbol": "Rp"
        },
      ],
      flag: 'https://restcountries.eu/data/idn.svg',
    },
  ];

  selectedCountry: any = null;

  constructor() {}

  ngOnInit() {}


  displayedColumns: string[] = ['name', 'capital', 'population', 'currencies', 'flag'];
  dataSource : any = [];

  // Page events
  onRegionChange = (e: any) => {
  };

  onCountryChange = (e: any) => {
    this.selectedCountry = this.countryOptions.find((co) => {
      return co.value === e.value;
    });
    this.dataSource = [this.selectedCountry];
  };
}
