import { NotFoundPage } from 'containers/NotFoundPage/_index';

export function routesList() {
  return [
    {
      path: '*',
      component: <NotFoundPage />,
      protected: false,
    },
  ];
}
