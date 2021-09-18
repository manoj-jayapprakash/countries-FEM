import { useCountries } from '../store/store';

import { Link } from 'react-router-dom';

export const CountryDetails = (props) => {
  const { data, isError, isLoading } = useCountries(
    'all',
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
      return <p className="mx-1"> No borders countries available </p>;
    const borderCountriesList = countryRequested.borders.flatMap((bc) =>
      data.filter((ac) => ac.alpha3Code === bc)
    );
    const markup = borderCountriesList.map((c) => (
      <Link
        key={c.alpha3Code}
        to={`/details/${c.alpha3Code}`}
        className="block  bg-theme-elements rounded shadow px-4 py-2 m-1"
      >
        {c.name}
      </Link>
    ));
    return <>{markup}</>;
  };
  return (
    <div className="lg:flex justify-between gap-20 my-10">
      <div className="lg:w-1/2">
        <img
          src={countryRequested.flag}
          alt={'Flag of ' + countryRequested.name}
          width="600"
          height="300"
        />
      </div>
      <div className="lg:w-1/2">
        <div className="m-2">
          <h2 className="my-4 text-xl lg:text-4xl">{countryRequested.name}</h2>
          <div className="lg:flex justify-between">
            <div className="my-2 lg:m-0">
              <p className="my-1">
                Native Name:{' '}
                <span className="dark:text-theme-gray-txt">
                  {countryRequested.nativeName}
                </span>
              </p>
              <p className="my-1 ">
                Population:{' '}
                <span className="dark:text-theme-gray-txt">
                  {countryRequested.population}
                </span>
              </p>
              <p className="my-1">
                Region:{' '}
                <span className="dark:text-theme-gray-txt">
                  {countryRequested.region}
                </span>
              </p>
              <p className="my-1">
                Sub Region:{' '}
                <span className="dark:text-theme-gray-txt">
                  {countryRequested.subregion}
                </span>
              </p>
              <p className="my-1">
                Capital:{' '}
                <span className="dark:text-theme-gray-txt">
                  {countryRequested.capital}
                </span>
              </p>
            </div>
            <div className="my-4 lg:m-0">
              <p className="my-1">
                Top Level Domain:{' '}
                <span className="dark:text-theme-gray-txt">
                  {countryRequested.topLevelDomain}
                </span>
              </p>
              <p className="my-1">
                Currencies:{' '}
                <span className="dark:text-theme-gray-txt">
                  {countryRequested.currencies[0].code}
                </span>
              </p>
              <p className="my-1">
                Languages:{' '}
                <span className="dark:text-theme-gray-txt">
                  {countryRequested.languages
                    .map((language) => language.name)
                    .join(', ')}
                </span>
              </p>
            </div>
          </div>
        </div>
        <section className="lg:flex m-2 lg:my-10">
          <h4 className="text-lg ">Border Countries: </h4>
          <nav className="lg:flex items-center flex-wrap">
            {renderBorderCountries()}
          </nav>
        </section>
      </div>
    </div>
  );
};
