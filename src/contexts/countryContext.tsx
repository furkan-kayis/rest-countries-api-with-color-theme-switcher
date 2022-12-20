import { createContext, Dispatch, SetStateAction } from 'react';
import { Country } from '../vite-env';

interface ICountryContext {
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  countries: Country[] | null;
  setCountries: Dispatch<SetStateAction<Country[] | null>>;
}

const CountryContext = createContext<Partial<ICountryContext>>({});
export default CountryContext;
