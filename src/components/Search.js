import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

export const Search = () => {
  const [value, setValue] = useState();
  const [showSuggestions, setSuggestions] = useState(false);

  const searchHandler = (e) => {
    setValue(e.target.value);
    setSuggestions(true);
  };

  const hideSuggestions = () => {
    setSuggestions(false);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setSuggestions(false);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <div className="search-wrapper p-4 relative md:w-96">
      <label htmlFor="search" className="block">
        Enter the country name
      </label>
      <input
        type="text"
        placeholder="Search for a country..."
        className="search bg-theme-elements w-full p-2 shadow rounded my-1"
        onChange={searchHandler}
        value={value}
        onBlur={hideSuggestions}
      />
      <Link to="/details">
        <i
          className="fas fa-search absolute top-12"
          style={{ right: '2rem' }}
        ></i>
      </Link>
      <ul
        className={
          showSuggestions
            ? 'search__suggestions dark:bg-theme-elements absolute w-11/12 p-2'
            : 'hidden'
        }
        style={{ top: '5.5rem', left: '1rem' }}
      >
        <li className="py-1">
          <Link to="/details">One</Link>
        </li>
        <li>
          <Link to="/details">One</Link>
        </li>
        <li>
          <Link to="/details">One</Link>
        </li>
        <li>
          <Link to="/details">One</Link>
        </li>
      </ul>
    </div>
  );
};
