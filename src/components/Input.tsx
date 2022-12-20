import { HiSearch } from 'react-icons/hi';
import { RxCross1 } from 'react-icons/rx';
import { Dispatch, SetStateAction } from 'react';

interface InputProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}
export default function Input({ search, setSearch }: InputProps) {
  return (
    <div className="flex w-full sm:w-7/12 lg:w-2/5 place-content-between shadow-md rounded  text-dark-gray bg-white dark:bg-dark-blue dark:text-white mb-10 sm:mb-0">
      <div className="flex">
        <HiSearch className="text-lg mr-5 ml-8 mt-5 " />
        <input
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search for a country..."
          className="focus:outline-none rounded bg-white dark:bg-dark-blue dark:text-white"
        />
      </div>
      <RxCross1
        onClick={() => setSearch('')}
        className={` mt-6 mr-8 cursor-pointer ${!search ? 'invisible' : ''}`}
      />
    </div>
  );
}
