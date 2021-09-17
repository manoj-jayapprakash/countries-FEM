import { Filters } from '../components/Filters';
import { Countries } from '../components/Countries';

import { Switch, Route } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <Filters />
      <Switch>
        <Route path="/" exact>
          <Countries region="all" url="https://restcountries.eu/rest/v2/all" />
        </Route>
        <Route path="/home/africa">
          <Countries
            region="Africa"
            url="https://restcountries.eu/rest/v2/region/africa"
          />
        </Route>
        <Route path="/home/america">
          <Countries
            region="America"
            url="https://restcountries.eu/rest/v2/region/americas"
          />
        </Route>
        <Route path="/home/asia">
          <Countries
            region="Asia"
            url="https://restcountries.eu/rest/v2/region/asia"
          />
        </Route>
        <Route path="/home/europe">
          <Countries
            region="Europe"
            url="https://restcountries.eu/rest/v2/region/europe"
          />
        </Route>
        <Route path="/home/oceania">
          <Countries
            region="Ocenia"
            url="https://restcountries.eu/rest/v2/region/oceania"
          />
        </Route>
      </Switch>
    </>
  );
};
