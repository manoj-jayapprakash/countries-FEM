import { useCountries } from '../store/store';

export const CountryDetails = (props) => {
  const { data, isError, isLoading } = useCountries(
    props.alpha3Code,
    'https://restcountries.eu/rest/v2/alpha/' + props.alpha3Code
  );
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return (
      <p>Error! Unable to load country details. Please try again later.</p>
    );
  }
};
