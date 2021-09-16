import { Card } from './Card';

import { useCountries } from '../store/store';

export const Countries = (props) => {
  const { data, isError, isLoading } = useCountries(props.region, props.url);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return (
      <div>Error! Unable to load country details. Please try again later.</div>
    );
  }

  return (
    <main className="xl:container mx-auto flex flex-wrap gap-4">
      {data.map((country) => (
        <Card key={country.alpha3Code} country={country} />
      ))}
    </main>
  );
};
