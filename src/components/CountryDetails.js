import { useCountries } from '../store/store';

import { Link } from 'react-router-dom';

export const CountryDetails = (props) => {
  const { data, isError, isLoading } = useCountries(
    props.country,
    'https://restcountries.eu/rest/v2/all/'
  );
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return (
      <p>Error! Unable to load country details. Please try again later.</p>
    );
  }
  const [countryRequested] = data.filter((c) => c.alpha3Code === props.country);

  const renderBorderCountries = () => {
    if (countryRequested.borders.length === 0)
      return <p> No borders countries available </p>;
    const borderCountriesList = countryRequested.borders.flatMap((bc) =>
      data.filter((ac) => ac.alpha3Code === bc)
    );
    const markup = borderCountriesList.map((c) => (
      <button
        key={c.alpha3Code}
        className="bg-theme-elements rounded shadow px-4 py-2 m-1"
      >
        <Link to={`/details/${c.alpha3Code}`}>{c.name}</Link>
      </button>
    ));
    return <>{markup}</>;
  };
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
        <div>{renderBorderCountries()}</div>
      </div>
    </>
  );
};
