import { Dispatch, SetStateAction, useState, useEffect } from 'react';

import { Country } from '../vite-env';
import Input from './Input';
import Selector from './Selector';

interface SearchProps {
  countries: Country[];
  setList: Dispatch<SetStateAction<Country[]>>;
}
export default function Search({ countries, setList }: SearchProps) {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');
  const regions = [...new Set(countries.map((country) => country.region))];

  useEffect(() => {
    setList(
      countries.filter(
        (c) =>
          (search === '' && region === '') ||
          (c.name.common.toLowerCase().includes(search.toLowerCase()) &&
            (region === '' || c.region === region))
      )
    );
  }, [countries, region, search, setList]);
  return (
    <div className="flex flex-col sm:flex-row place-content-between my-10 mx-5 sm:mx-16 lg:mx-12 xl:mx-20">
      <Input search={search} setSearch={setSearch} />
      <Selector regions={regions} setRegion={setRegion} />
    </div>
  );
}
