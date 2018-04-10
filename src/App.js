import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () =>
  <Router basename={'/micro-front-ends-web-tools'}>
    <div>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Tally} />
      <Route exact path={`${process.env.PUBLIC_URL}/Tally`} component={Tally} />
      <Route path={`${process.env.PUBLIC_URL}/404`}component={Page404} />
    </div>
  </Router>;

const Tally = () =>
  <div>
    <standard-navbar></standard-navbar>
    <br />
    <tally-tool></tally-tool>
  </div>;

const Page404 = () =>
  <div>
    <standard-navbar></standard-navbar>
    <error-page title="404 Not Found"></error-page>
  </div>;

export default App;