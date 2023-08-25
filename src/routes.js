import React, {
  Fragment
} from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomeView from './views/home/HomeView';

export const renderRoutes = (routes = []) => (
  <Switch>
    {routes.map((route, i) => {
      const Layout = route.layout || Fragment;
      const Component = route.component;

      return (
        <Route
          key={i}
          path={route.path}
          exact={route.exact}
          render={(props) => (
            <Layout>
              {route.routes
                ? renderRoutes(route.routes)
                : <Component {...props} />}
            </Layout>
          )}
        />
      );
    })}
  </Switch>
);

const routes = [
  {
    path: '*',
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: '/',
        component: HomeView
      }
    ]
  }
];

export default routes;
