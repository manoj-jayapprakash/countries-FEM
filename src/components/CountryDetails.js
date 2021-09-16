import { useCountries } from '../store/store';

import { Link } from 'react-router-dom';

export const CountryDetails = (props) => {
  const {
    data: countryRequested,
    isError,
    isLoading,
  } = useCountries(
    props.country,
    'https://restcountries.eu/rest/v2/alpha/' + props.country
  );
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return (
      <p>Error! Unable to load country details. Please try again later.</p>
    );
  }

  return (
    <>
      <div className="flag">
        <img
          src={countryRequested.flag}
          alt={'Flag of ' + countryRequested.name}
        />
      </div>
      <div className="country-details">
        <h2 className="my-4 text-xl">{countryRequested.name}</h2>
        <div className="">
          <div className="my-2">
            <p className="my-1">
              <span className="bold">Native Name: </span>
              {countryRequested.nativeName}
            </p>
            <p className="my-1">
              <span className="bold">Population: </span>
              {countryRequested.population}
            </p>
            <p className="my-1">
              <span className="bold">Region: </span>
              {countryRequested.region}
            </p>
            <p className="my-1">
              <span className="bold">Sub Region: </span>
              {countryRequested.subregion}
            </p>
            <p className="my-1">
              <span className="bold">Capital: </span>
              {countryRequested.capital}
            </p>
          </div>
          <div className="my-4">
            <p className="my-1">
              <span className="bold">Top Level Domain: </span>
              {countryRequested.topLevelDomain}
            </p>
            <p className="my-1">
              <span className="bold">Currencies: </span>
              {countryRequested.currencies[0].code}
            </p>
            <p className="my-1">
              <span className="bold">Languages: </span>
              {countryRequested.languages
                .map((language) => language.name)
                .join(', ')}
            </p>
          </div>
        </div>
      </div>
      <div className="ld:flex">
        <h4 className="text-lg">Border Countries: </h4>
        <div className="flex"></div>
      </div>
    </>
  );
};
