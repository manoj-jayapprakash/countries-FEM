import { Link } from 'react-router-dom';

import { useState, useEffect, useRef } from 'react';
import { useOnClickOutside } from '../hooks/useOnClickOutside';

export const FilterType = () => {
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  const [region, setRegion] = useState('Filter by Region');
  const [showFilterTypes, setShowFilterTypes] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setShowFilterTypes(false));
  //Displays/hides the regions available
  const showFilterTypeHandler = () => {
    setShowFilterTypes(!showFilterTypes);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setShowFilterTypes(false);
      }
    };
    const handleLoad = () => setRegion('Filter by Region');
    window.addEventListener('keydown', handleEsc);
    window.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  return (
    <div className="filter__type p-4 w-4/5 md:w-64 relative">
      <button
        className="filter__type-label flex justify-between items-center w-full p-4 bg-theme-elements shadow rounded"
        onClick={showFilterTypeHandler}
      >
        {region}
        <i className="fas fa-angle-down block"></i>
      </button>
      <div
        ref={ref}
        className={
          showFilterTypes
            ? 'filter__options my-1 p-4 bg-theme-elements shadow rounded absolute'
            : 'hidden'
        }
        style={{ width: '90%' }}
      >
        {regions.map((reg) => (
          <Link
            key={reg}
            to={`/home/${reg.toLowerCase()}`}
            className="block"
            onClick={() => {
              setShowFilterTypes(false);
              setRegion(reg);
            }}
          >
            {reg}
          </Link>
        ))}
      </div>
    </div>
  );
};
