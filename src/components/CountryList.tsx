import { useState } from 'react';
import { Country } from '../vite-env';
import CountryCard from './CountryCard';
import ScrollButton from './ScrollButton';
import Search from './Search';

interface CountryListProps {
  countries: Country[];
}
export default function CountryList({ countries }: CountryListProps) {
  const [list, setList] = useState<Country[]>(countries);
  const [renderedCountryCount, setRenderedCountryCount] = useState(8);
  const currentCountries = list.slice(0, renderedCountryCount);
  function handleScroll() {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight &&
      renderedCountryCount <= list.length;

    if (bottom) {
      setRenderedCountryCount((c) => c + 4);
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  return (
    <>
      <Search countries={countries} setList={setList} />
      <ScrollButton />
      {list.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 xl:gap-20 mx-16 mb-7 lg:mx-12 xl:mx-20 xl:mb-20">
          {currentCountries.map((country, index) => (
            <CountryCard key={index} country={country} />
          ))}
        </div>
      ) : (
        <h1 className="flex justify-center font-semi-bold">No Results</h1>
      )}
    </>
  );
}
