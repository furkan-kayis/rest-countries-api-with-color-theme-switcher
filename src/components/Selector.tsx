import { useState, Dispatch, SetStateAction } from 'react';
import { BiChevronDown } from 'react-icons/bi';

interface SelectorProps {
  regions: string[];
  setRegion: Dispatch<SetStateAction<string>>;
}
export default function Selector({ regions, setRegion }: SelectorProps) {
  const [selected, setSelected] = useState('');
  const [open, setOpen] = useState(false);

  return (
    <div className="w-3/5 sm:w-1/3 lg:w-1/6 text-sm font-light relative cursor-pointer bg-white py-1 shadow-md rounded dark:bg-dark-blue dark:text-white">
      <div
        onClickCapture={() => setOpen(!open)}
        className="w-full p-2 pl-4 flex items-center justify-between rounded my-2"
      >
        {selected || 'Filter by Region'}
        <BiChevronDown size={20} className={`${open ? 'rotate-180' : ''}`} />
      </div>
      <ul
        className={`absolute w-full py-3 bg-white mt-2 overflow-y-auto rounded  dark:bg-dark-blue dark:text-white" ${
          open ? 'max-h-60' : 'max-h-0 hidden'
        } `}
      >
        <li
          className={`pl-8 p-1 hover:bg-slate-200 dark:hover:bg-slate-700
          
          ${!selected ? 'hidden' : ''} `}
          onClickCapture={() => {
            setRegion('');
            setSelected('');
            setOpen(false);
          }}
        >
          All Regions
        </li>
        {regions.map((region, index) => (
          <li
            key={index}
            className={`p-1 pl-8 hover:bg-slate-200 dark:hover:bg-slate-700
            ${region === selected ? 'bg-slate-200  dark:bg-slate-700' : ''}
           `}
            onClickCapture={() => {
              if (region !== selected) {
                setRegion(region);
                setSelected(region);
                setOpen(false);
              }
            }}
          >
            {region}
          </li>
        ))}
      </ul>
    </div>
  );
}
