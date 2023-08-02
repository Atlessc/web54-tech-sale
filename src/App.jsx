import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './components/Routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          >
            {route.children?.map((childRoute) => (
              <Route
                key={childRoute.path}
                path={childRoute.path}
                element={childRoute.element}
              />
            ))}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
