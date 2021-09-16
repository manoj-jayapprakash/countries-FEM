import { Link } from 'react-router-dom';

import { useState } from 'react';

export const FilterType = () => {
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  const [showFilterTypes, setShowFilterTypes] = useState(false);

  //Displays/hides the regions available
  const showFilterTypeHandler = () => {
    setShowFilterTypes(!showFilterTypes);
  };
  return (
    <div className="filter__type p-4 w-4/5 md:w-64 relative">
      <button
        className="filter__type-label flex justify-between items-center w-full p-4 bg-theme-elements shadow rounded"
        onClick={showFilterTypeHandler}
      >
        Filter by Region
        <i className="fas fa-angle-down block"></i>
      </button>
      <div
        className={
          showFilterTypes
            ? 'filter__options my-1 p-4 bg-theme-elements shadow rounded absolute'
            : 'hidden'
        }
        style={{ width: '90%' }}
      >
        {regions.map((region) => (
          <Link
            key={region}
            to={`/home/${region.toLowerCase()}`}
            className="block"
            onClick={() => setShowFilterTypes(false)}
          >
            {region}
          </Link>
        ))}
      </div>
    </div>
  );
};
