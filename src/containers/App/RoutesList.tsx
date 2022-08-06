import { Auth } from 'containers/Auth/_index';
import { Main } from 'containers/Main/_index';
import { NotFoundPage } from 'containers/NotFoundPage/_index';

export function routesList() {
  return [
    {
      path: '/',
      component: <Main />,
      protected: true,
    },
    {
      path: '/auth',
      component: <Auth />,
      protected: false,
    },
    {
      path: '*',
      component: <NotFoundPage />,
      protected: false,
    },
  ];
}
