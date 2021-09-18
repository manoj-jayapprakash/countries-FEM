import { Card } from './Card';

import { LazyLoad } from 'react-observer-api';
import { useCountries } from '../store/store';

export const Countries = (props) => {
  const { data, isError, isLoading } = useCountries(props.region, props.url);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return (
      <p>Error! Unable to load country details. Please try again later.</p>
    );
  }

  return (
    <LazyLoad>
      <main className="xl:container mx-auto flex justify-center lg:justify-between flex-wrap gap-4 px-2">
        {data.map((country) => (
          <Card
            key={country.alpha3Code}
            country={country}
            code={country.alpha3Code}
          />
        ))}
      </main>
    </LazyLoad>
  );
};
