import { Navigate, useLocation } from 'react-router-dom';

import routesPaths from 'constants/routesPaths';

function PrivateRoute({ authenticated, privateRoute, children }: PrivateRouteProps) {
  const location = useLocation();

  if (privateRoute) {
    return authenticated ? children : <Navigate to={routesPaths.login} state={{ from: location }} replace />
  }

  return !authenticated ? children : <Navigate to={routesPaths.home} state={{ from: location }} replace />
};

export interface PrivateRouteProps {
  authenticated?: boolean,
  children: JSX.Element,
  privateRoute?: boolean
}

export default PrivateRoute;
