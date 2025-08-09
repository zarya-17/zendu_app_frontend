import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';

import { homePageRoute } from '@pages/home/home-page.route';
import { loginPageRoute } from '@pages/login/login-page.route';
import { page404Route } from '@pages/page-404/page-404.route';
import { pathKeys } from '@shared/router';

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
  {
    children: [
      homePageRoute,
      loginPageRoute,
      page404Route,
      {
        path: '*',
        loader: async () => redirect(pathKeys.page404),
      },
    ],
  },
]);
