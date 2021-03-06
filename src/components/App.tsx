import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import useSession from 'hooks/useSession';
import routes from '../routes';
import PrivateRoute from './Routes/PrivateRoute';

const App = () => {
  const { authenticated } = useSession();

  return (
    <>
      <Helmet>
        <title>Target</title>
      </Helmet>
      <BrowserRouter>
        <Routes>
          {routes.map(({ children, path, privateRoute}, index) => (
            <Route key={`route${index}`} path={path} element={
              <PrivateRoute privateRoute={privateRoute} authenticated={authenticated}>
                {children}
              </PrivateRoute>}/>
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
