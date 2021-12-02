import { useCountries } from '../store/store';

import { Link } from 'react-router-dom';
import {urls} from '../store/urls';

export const CountryDetails = (props) => {
  
  const { data, isError, isLoading } = useCountries(
    'all',
    urls.all
  );
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return (
      <p>Error! Unable to load country details. Please try again later.</p>
    );
  }
  const [countryRequested] = data.filter((c) => c.cca3 === props.country);

  const renderBorderCountries = () => {
    if (!countryRequested.hasOwnProperty('borders'))
      return <p className="mx-1"> No borders countries available </p>;
    const borderCountriesList = countryRequested.borders.flatMap((bc) =>
      data.filter((ac) => ac.cca3 === bc)
    );
    const markup = borderCountriesList.map((c) => (
      <Link
        key={c.cca3}
        to={`/details/${c.cca3}`}
        className="block  bg-theme-elements rounded shadow px-4 py-2 m-1"
      >
        {c.name.common}
      </Link>
    ));
    return <>{markup}</>;
  };

  const renderCurrencies = () =>{
    let currency="No currency data available";
    for (let curr in countryRequested.currencies){
      currency = curr;
      break;
    }
    return currency;
  }

  const renderLanguages = () => {
    let languages=[];
    for (let lang in countryRequested.languages){
      languages.push(countryRequested.languages[lang])
    }
    if (languages.length > 0) 
      return languages.join(" ,");
    else
      return "No language data available";
  }


  return (
    <div className="lg:flex justify-between gap-20 my-10">
      <div className="lg:w-1/2">
        <img
          src={countryRequested.flags.svg}
          alt={'Flag of ' + countryRequested.name.common}
          width="600"
          height="300"
        />
      </div>
      <div className="lg:w-1/2">
        <div className="m-2">
          <h2 className="my-4 text-xl lg:text-4xl">{countryRequested.name.common}</h2>
          <div className="lg:flex justify-between">
            <div className="my-2 lg:m-0">
              
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
                  {countryRequested.tld}
                </span>
              </p>
              <p className="my-1">
                Currencies:{' '}
                <span className="dark:text-theme-gray-txt">
                  {renderCurrencies()}
                </span>
              </p>
              <p className="my-1">
                Languages:{' '}
                <span className="dark:text-theme-gray-txt">
                    {renderLanguages()}
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
