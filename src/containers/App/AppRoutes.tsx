import { Auth } from 'containers/Auth/_index';
import { NotFoundPage } from 'containers/NotFoundPage/_index';
import { Route, Routes } from 'react-router-dom';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
