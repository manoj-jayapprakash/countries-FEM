import { useQuery } from 'react-query';

import { Card } from './Card';

const fetchCountries = async () => {
  const response = await fetch('https://restcountries.eu/rest/v2/all');
  const data = await response.json();
  return data;
};

export const Countries = () => {
  const { data, isError, isLoading } = useQuery('countries', fetchCountries);

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
