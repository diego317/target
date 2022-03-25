import React from 'react';

import routesPaths from 'constants/routesPaths';
import Login from 'pages/Login';

const routes = [
  {
    path: routesPaths.index,
    children: <Login />,
    privateRoute: true
  },
  {
    path: routesPaths.login,
    children: <Login />
  },
];

export default routes;
