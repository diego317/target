import { Navigate, useLocation } from 'react-router-dom';

import routes from 'constants/routesPaths';

function PrivateRoute({ authenticated, privateRoute, children }: PrivateRouteProps) {
  const location = useLocation();

  if (privateRoute) {
    return authenticated ? children : <Navigate to={routes.login} state={{ from: location }} replace />
  }

  return children
};

export interface PrivateRouteProps {
  authenticated?: boolean,
  children: JSX.Element,
  privateRoute?: boolean
}

export default PrivateRoute;
