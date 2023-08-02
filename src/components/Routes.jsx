import Layout from '../Layout';
import Home from '../Home';
import InPersonBrochure from '../pages/In-PersonBrochure';
import OnlineSale from '../pages/OnlineSale';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'in-person-brochure', element: <InPersonBrochure /> },
      { path: 'online-sale', element: <OnlineSale /> },
    ],
  },
];

export default routes;