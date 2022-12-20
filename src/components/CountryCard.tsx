import { useNavigate } from 'react-router-dom';
import { Country } from '../vite-env';

interface CountryProps {
  country: Country;
}

export default function CountryCard({ country }: CountryProps) {
  const navigate = useNavigate();
  const navigateToCountry = () =>
    navigate(`country/${country.name.common.replace(' ', '+')}`);
  const formattedPopulation = new Intl.NumberFormat().format(
    country.population
  );
  return (
    <article
      className="bg-white dark:bg-dark-blue dark:text-white shadow-md rounded cursor-pointer transition-transform active:translate-y-1"
      onClickCapture={navigateToCountry}
    >
      <img
        src={country.flags.svg}
        alt={`${country.name.common} flag`}
        className="rounded-t"
      />
      <ul className="m-5 mb-14 text-sm">
        <li>
          <h1 className="font-extra-bold text-lg mb-3">
            {country.name.common}
          </h1>
        </li>
        <li>
          <span className="font-semi-bold">Population:</span>{' '}
          {formattedPopulation}
        </li>
        <li className="mt-2">
          <span className="font-semi-bold">Region:</span> {country.region}
        </li>
        <li className="mt-2">
          <span className="font-semi-bold">Capital:</span> {country.capital}
        </li>
      </ul>
    </article>
  );
}
