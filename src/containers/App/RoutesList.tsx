import { Auth } from 'containers/Auth/_index';

export function routesList() {
  return [
    // {
    //   path: '/',
    //   component: <Main />,
    //   protected: true,
    // },
    {
      path: '/auth',
      component: <Auth />,
      protected: false,
    },
  ];
}
