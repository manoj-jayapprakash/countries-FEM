import { CountryDetails } from '../components/CountryDetails';

import { useHistory } from 'react-router';

export const Details = ({ match }) => {
  const country = match.params.country;

  const history = useHistory();

  const backClickHandler = (event) => {
    history.goBack();
  };
  return (
    <div className="xl:container mx-auto p-4">
      <nav className="my-4 ">
        <button
          className="bg-theme-elements shadow rounded px-4 py-2"
          onClick={backClickHandler}
        >
          <i className="fas fa-arrow-left"></i> Back
        </button>
      </nav>
      <CountryDetails country={country} />
    </div>
  );
};
