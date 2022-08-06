import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from './RequireAuth';
import { routesList } from './RoutesList';

export function AppRoutes() {
  return (
    <Routes>
      {routesList().map(route => {
        if (route.protected) {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<RequireAuth>{route.component}</RequireAuth>}
            />
          );
        }
        return (
          <Route key={route.path} path={route.path} element={route.component} />
        );
      })}
    </Routes>
  );
}
