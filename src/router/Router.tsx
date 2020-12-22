import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { MenuPage } from '@pages/MenuPage';
import { DevPage } from '@pages/DevPage';
import { RouterPath } from '@router/paths.enum';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={RouterPath.DEV}
          component={DevPage}
        />
        <Route
          exact
          path={RouterPath.MENU}
          component={MenuPage}
        />
      </Switch>
    </BrowserRouter>
  );
}
