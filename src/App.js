import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Explore from './components/Explore';
import Sell from './components/Sell';
import Community from './components/Community';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/explore" component={Explore} />
          <Route path="/sell" component={Sell} />
          <Route path="/community" component={Community} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
