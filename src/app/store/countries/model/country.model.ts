export interface Currency {
    code: string;
    name: string;
    symbol: string;
}
export interface Country {
    capital: string;
    currencies: Currency[]
    display: string;
    flag: string;
    numericCode: string;
    id?: number;
    name: string;
    population: string | number;
    value: string;
}