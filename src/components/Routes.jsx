import Layout from '../Layout';
import Home from '../Home';
import InPersonBrochure from '../pages/In-PersonBrochure';
import OnlineSale from '../pages/OnlineSale';
import NotFound from '../pages/NotFound';
import Dashboard from '../pages/Dashboard';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'brochure', element: <InPersonBrochure /> },
      { path: 'online-sale', element: <OnlineSale /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: '*', element: <NotFound />}
    ],
  },
];

export default routes;