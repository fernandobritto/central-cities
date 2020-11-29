declare module 'central-cities' {
  type CountriesArray = {
    country: string;
    city: string;
    independence: string;
    location: string;
  }[];

  type Operator = '=' | '>' | '>=' | '<' | '<=';

  export default class Countries {
    countries: CountriesArray;
    original: CountriesArray;
    capital: string;

    constructor(countries?: CountriesArray);

    list(): CountriesArray;
    reset(): this;
    byName(name: string): this;
    byCapital(city: string): this;
    byLocation(region: string): this;
    locations(): string[];
    byIndependence(year: number, operator?: Operator): this;
    compare(firstValue: number, operator: Operator, secondValue: number): this;
    toJson(): CountriesArray;
  }
}
