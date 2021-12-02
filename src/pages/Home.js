import { Filters } from '../components/Filters';
import { Countries } from '../components/Countries';

import { Switch, Route } from 'react-router-dom';

import {urls} from '../store/urls'

export const Home = () => {
  
  return (
    <>
      <Filters />
      <Switch>
        <Route path="/" exact>
          <Countries region="all" url={urls.all} />
        </Route>
        <Route path="/home/africa">
          <Countries
            region="Africa"
            url={urls.africa}
          />
        </Route>
        <Route path="/home/america">
          <Countries
            region="America"
            url={urls.america}
          />
        </Route>
        <Route path="/home/asia">
          <Countries
            region="Asia"
            url={urls.asia}
          />
        </Route>
        <Route path="/home/europe">
          <Countries
            region="Europe"
            url={urls.europe}
          />
        </Route>
        <Route path="/home/oceania">
          <Countries
            region="Oceania"
            url={urls.oceania}
          />
        </Route>
      </Switch>
    </>
  );
};
