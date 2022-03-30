import React from 'react';

import routesPaths from 'constants/routesPaths';
import PublicLayout from 'components/PublicLayout';
import SignUp from 'pages/SignUp';
import Login from 'pages/Login';

const routes = [
  {
    path: routesPaths.index,
    children: <PublicLayout />,
    privateRoute: false,
    subPaths: [
      {
        path: routesPaths.signUp,
        element: <SignUp />
      },
      {
        path: routesPaths.login,
        element: <Login />
      }
    ]
  },
];

export default routes;
