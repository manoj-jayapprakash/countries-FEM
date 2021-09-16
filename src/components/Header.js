import { useState } from 'react';

import { Link } from 'react-router-dom';

import { Home } from '../pages/Home';

export const Header = () => {
  //Get theme preference from the user's system
  const systemThemePreference =
    localStorage.getItem('dark') ||
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [dark, setDark] = useState(systemThemePreference);

  //Save the theme preference to localStorage
  const saveTheme = () => {
    setDark(!dark);
    localStorage.setItem('dark', dark);
  };

  //Add the dark style or light theme style based on the user's preference'
  if (dark) {
    document.documentElement.classList.add('dark');
    document.body.classList.add('bg-theme-bg');
    document.body.classList.add('text-theme-txt');
  } else {
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('bg-theme-bg');
    document.body.classList.remove('text-theme-txt');
  }
  return (
    <header className="flex justify-between p-4 md:p-6 shadow dark:bg-theme-elements ">
      <h1 className="text-lg md:text-3xl font-bold">
        <Link to="/">Where in the world?</Link>
      </h1>
      <button className="" onClick={saveTheme}>
        {dark ? (
          <>
            <i className="fas fa-moon"></i> Light Mode
          </>
        ) : (
          <>
            <i className="far fa-moon"></i> Dark Mode
          </>
        )}
      </button>
    </header>
  );
};
