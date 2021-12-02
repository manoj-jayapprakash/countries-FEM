import { useState, useEffect, useRef } from 'react';

import { useCountries } from '../store/store';
import { Link } from 'react-router-dom';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import {urls} from "../store/urls";

export const Search = () => {
  const { data } = useCountries('all', urls.all);
  const [value, setValue] = useState('');
  const [showSuggestions, setSuggestions] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setSuggestions(false));

  //As the user types in the search corresponding countries will be displayed in the suggestion list
  const searchHandler = (e) => {
    setValue(e.target.value);
    setSuggestions(true);
  };

  const createSuggestionList = () => {
    const list = data
      .filter((country) => country.name.toLowerCase().includes(value))
      .map((filterCountry) => (
        <li className="py-1" key={filterCountry.alpha3Code}>
          <Link to={`/details/${filterCountry.alpha3Code}`} className="block">
            {filterCountry.name}
          </Link>
        </li>
      ));

    if (list.length === 0) return <li className="py-1">No Matches found</li>;
    else return list;
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
      />
      <Link to="/details">
        <i
          className="fas fa-search absolute top-12"
          style={{ right: '2rem' }}
        ></i>
      </Link>
      <ul
        ref={ref}
        className={
          showSuggestions
            ? 'search__suggestions bg-theme-elements rounded shadow absolute w-11/12 p-2 z-10'
            : 'hidden'
        }
        style={{ top: '5.5rem', left: '1rem' }}
      >
        {showSuggestions && createSuggestionList()}
      </ul>
    </div>
  );
};
