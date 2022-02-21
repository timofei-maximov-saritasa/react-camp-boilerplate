import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import { testRoutes } from 'src/features/test/routes';

const routes: RouteObject[] = [
  {
    path: '*',
    element: <Navigate to="/test" />,
  },
  ...testRoutes,
];

export const RootRouter: React.VFC = () => useRoutes(routes);
