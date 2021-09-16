import { Link } from 'react-router-dom';

export const Card = (props) => {
  return (
    <article
      className="mx-auto rounded shadow bg-theme-elements overflow-hidden my-4"
      style={{ maxWidth: '280px' }}
    >
      <Link to={`/details/${props.country.alpha3Code}`}>
        <img
          className="max-w-full block"
          src={props.country.flag}
          alt={`Flag of ${props.country.name}`}
        />
      </Link>
      <div className="p-4">
        <Link to={`/details/${props.country.alpha3Code}`}>
          <h2 className="text-xl font-bold py-2">{props.country.name}</h2>
        </Link>
        <div className="country-data py-4">
          <p className="py-1">
            <span className="font-semibold ">Population: </span>
            {props.country.population}
          </p>
          <p className="py-1">
            <span className="font-semibold">Region: </span>
            {props.country.region}
          </p>
          <p className="py-1">
            <span className="font-semibold">Capital: </span>
            {props.country.capital}
          </p>
        </div>
      </div>
    </article>
  );
};
