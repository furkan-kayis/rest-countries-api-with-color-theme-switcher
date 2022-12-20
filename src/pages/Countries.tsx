import { useContext } from 'react';
import { MoonLoader } from 'react-spinners';
import CountryList from '../components/CountryList';
import CountryContext from '../contexts/countryContext';

export default function Countries() {
  const context = useContext(CountryContext);
  const { countries, error, isLoading } = context;
  return (
    <>
      {countries ? <CountryList countries={countries} /> : null}
      {error ? (
        <div className="flex justify-center p-10">
          <h1 className="text-red-600">{error.message}</h1>
        </div>
      ) : null}
      {isLoading ? (
        <div className="flex justify-center p-10">
          <MoonLoader color="#858585" size={50} />
        </div>
      ) : null}
    </>
  );
}
