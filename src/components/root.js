import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Landing } from './landing/landing.page';

const NotFound = () => (
  <div>
    404: Not found
  </div>
);

const SamplePage = () => (
  <div>
    Sample
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route path="/album">
          <SamplePage />
        </Route>
        <Route exact path="/">
          <Landing/>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
