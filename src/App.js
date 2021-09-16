import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Details } from './pages/Details';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
