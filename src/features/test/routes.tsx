import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

const TestPage = lazy(() => import('./pages/TestPage').then(module => ({ default: module.TestPage })));

export const testRoutes: RouteObject[] = [
  {
    path: 'test',
    element: <TestPage />,
  },
  {
    path: '*',
    element: <Navigate to="test" />,
  },
];
