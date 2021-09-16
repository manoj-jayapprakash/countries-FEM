import { CountryDetails } from '../components/CountryDetails';

export const Details = ({ match }) => {
  const country = match.params.country;

  return (
    <div className="xl:container mx-auto p-4">
      <nav className="my-4 ">
        <button className="bg-theme-elements shadow rounded px-4 py-2">
          <i className="fas fa-arrow-left"></i> Back
        </button>
      </nav>
      <CountryDetails country={country} />
    </div>
  );
};
