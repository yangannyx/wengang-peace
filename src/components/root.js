import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Landing } from './landing/landing.page';
import { NotFound } from './common/page/not-found.page';
import { ComingSoon } from './common/page/coming-soon.page';

function App() {
  return (
    <div id="wrapper">
      <style>
      {`
        html,body,#root,#wrapper{height:100%;}
        html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}
        body{margin:0;}
        button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}
        input::-webkit-inner-spin-button,input::-webkit-outer-spin-button,input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}
      `}
    </style>
      <Switch>
        <Route path="/album">
          <ComingSoon />
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
