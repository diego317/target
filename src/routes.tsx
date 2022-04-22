import React from 'react';

import routesPaths from 'constants/routesPaths';
import PublicLayout from 'components/PublicLayout';
import SignUp from 'pages/SignUp';
import Login from 'pages/Login';
import Home from 'pages/Home';
import About from 'pages/About';

const routes = [
  {
    path: routesPaths.landing,
    children: <PublicLayout />,
    privateRoute: false,
    subPaths: [
      {
        path: routesPaths.login.substring(1),
        element: <Login />
      },
      {
        path: routesPaths.signUp.substring(1),
        element: <SignUp />
      },
      {
        path: routesPaths.about.substring(1),
        element: <About />
      },
    ]
  },
  {
    path: routesPaths.home,
    children: <Home />,
    privateRoute: true
  }
];

export default routes;
