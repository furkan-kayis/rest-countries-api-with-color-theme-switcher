import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HiOutlineMoon, HiMoon } from 'react-icons/hi';

export default function Navbar() {
  const [dark, toggleDark] = useState(localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);
  return (
    <header className="flex place-content-between py-7 shadow-md px-5 lg:px-20 bg-white dark:bg-dark-blue dark:text-white">
      <Link className="font-extra-bold sm:text-xl" to="/">
        Where in the world?
      </Link>
      <button type="button" onClick={() => toggleDark(!dark)}>
        {dark ? (
          <HiMoon className="inline mb-1 mr-1" />
        ) : (
          <HiOutlineMoon className="inline mb-1 mr-1" />
        )}
        <span className="font-semi-bold">Dark Mode</span>
      </button>
    </header>
  );
}
