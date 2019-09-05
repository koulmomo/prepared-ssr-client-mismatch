// @flow
import React from 'react';
import {Route, Switch} from 'fusion-plugin-react-router';

import MainAppLayout from './layouts/main-app.layout';
import Home from './pages/home.page';
import HomeFixed from './pages/home-fixed.page';
import PageNotFound from './pages/not-found.page';

const root = (
  <MainAppLayout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/fixed" component={HomeFixed} />
      <Route component={PageNotFound} />
    </Switch>
  </MainAppLayout>
);

export default root;
