import { useContext, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';
import CountryContext from '../contexts/countryContext';

export default function Details() {
  useEffect(() => window.scroll({ top: 0 }), []);
  const { countryName } = useParams();
  const navigate = useNavigate();
  const context = useContext(CountryContext);
  const { countries } = context;
  const country = countries?.find(
    (c) => c.name.common === countryName?.replace('+', ' ')
  );
  if (!country) return <h1>There is no country named {countryName}</h1>;
  const nativeNames = country.name.nativeName
    ? Object.values(country.name.nativeName).map(
        (name: { official: string; common: string }) => name.common
      )
    : null;
  const currencies = country.currencies
    ? Object.values(country.currencies).map(
        (currency: { name: string; symbol: string }) => currency.name
      )
    : null;
  const languages = country.languages
    ? Object.values(country.languages).map((language: string) => language)
    : null;
  const borderCountries = country.borders
    ? Object.values(country.borders).map((border) => border)
    : null;

  const borderCountriesNames: string[] = [];
  countries?.forEach((c) => {
    if (borderCountries?.includes(c.cca3))
      borderCountriesNames.push(c.name.common);
  });
  return (
    <div className="mx-5 lg:mx-20">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="mt-10 mb-20 bg-white rounded shadow-md p-1 px-6 py-2 dark:bg-dark-blue dark:text-white transition-transform active:translate-y-1"
      >
        <MdKeyboardBackspace className="inline mr-2" />
        Back
      </button>
      <article className="xl:grid xl:grid-flow-col flex flex-col content-center">
        <img
          src={country?.flags.svg}
          alt={`${country.name.common} flag`}
          className="w-auto max-h-96 self-center"
        />
        <div className="py-5 ml-12">
          <h1 className="font-extra-bold text-2xl">
            {countryName?.replace('+', ' ')}
          </h1>
          <div className="lg:flex gap-20 mt-5">
            <div>
              <div className="mb-2">
                <span className="font-semi-bold">Native Name: </span>
                {nativeNames?.map((n, i) => (i !== 0 ? `, ${n}` : n))}
              </div>
              <div className="mb-2">
                <span className="font-semi-bold">Population: </span>
                {new Intl.NumberFormat().format(country?.population)}
              </div>
              <div className="mb-2">
                <span className="font-semi-bold">Region: </span>
                {country?.region}
              </div>
              <div className="mb-2">
                <span className="font-semi-bold">Sub Region: </span>
                {country?.subregion}
              </div>
              <div className="mb-2">
                <span className="font-semi-bold">Capital: </span>
                {country?.capital}
              </div>
            </div>
            <div className="mt-16 lg:mt-0">
              <div className="mb-2">
                <span className="font-semi-bold">Top Level Domain: </span>
                {country?.tld}
              </div>
              <div className="mb-2">
                <span className="font-semi-bold">Currencies: </span>
                {currencies?.map((c, i) => (i !== 0 ? `, ${c}` : c))}
              </div>
              <div className="mb-2">
                <span className="font-semi-bold">Languages: </span>
                {languages?.map((l, i) => (i !== 0 ? `, ${l}` : l))}
              </div>
            </div>
          </div>
          <div className="mt-20 mb-10 lg:flex">
            <span className="font-semi-bold mr-2 mt-7">
              Border Countries:{' '}
              {borderCountriesNames?.length === 0 && (
                <span className="font-normal"> No border country</span>
              )}
            </span>
            <div className="flex flex-wrap mt-4">
              {borderCountriesNames?.map((b, i) => (
                <Link
                  to={`/country/${b}`}
                  key={i}
                  className="bg-white dark:bg-dark-blue dark:text-white shadow-md p-2 mx-1 mt-1 rounded text-center hover:translate-y-1"
                >
                  {b}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
