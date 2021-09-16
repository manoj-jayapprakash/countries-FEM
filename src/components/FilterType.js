import { Link } from 'react-router-dom';

import { useState } from 'react';

export const FilterType = () => {
  const [showFilterTypes, setShowFilterTypes] = useState(false);

  const showFilterTypeHandler = () => {
    setShowFilterTypes(!showFilterTypes);
  };
  return (
    <div className="filter__type p-4 w-4/5 md:w-64 relative">
      <button
        className="filter__type-label flex justify-between items-center w-full p-4 bg-theme-elements rounded"
        onClick={showFilterTypeHandler}
      >
        Filter by Region
        <i className="fas fa-angle-down block"></i>
      </button>
      <div
        className={
          showFilterTypes
            ? 'filter__options my-1 p-4 bg-theme-elements rounded absolute'
            : 'hidden'
        }
        style={{ width: '90%' }}
      >
        <Link to="/products" className="block">
          Africa
        </Link>
        <Link to="/products">Africa</Link>
        <Link to="/products">Africa</Link>
        <Link to="/products">Africa</Link>
      </div>
    </div>
  );
};
