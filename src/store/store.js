import { useQuery } from 'react-query';

//Fetch data of all the countries
const fetchAllCountries = async ({ queryKey }) => {
  const [, url] = queryKey;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const useCountries = (key, url) =>
  useQuery([key, url], fetchAllCountries);
