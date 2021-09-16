import { CountryDetails } from '../components/CountryDetails';

export const Details = ({ match }) => {
  const country = match.params.country;

  return (
    <>
      <nav>
        <button className="bg-theme-elements shadow rounded">
          <i className="fas fa-arrow-left"></i> Back
        </button>
      </nav>
      <CountryDetails country={country} />
    </>
  );
};
