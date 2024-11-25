import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../core/presenter/layout/layout';
import SimulationPage from '../transaction/presenter/page/simulation/simulation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <SimulationPage />
      }
    ],
  },
]);

export default router;
