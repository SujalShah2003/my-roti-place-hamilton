import { createBrowserRouter } from 'react-router-dom';

import MasterLayout from '../layout/MasterLayout';
import HomePage from '../pages/HomePage';
import MainLayout from '../layout/MainLayout';

export const routes = createBrowserRouter([
  {
    Component: MasterLayout,
    children: [
      {
        Component : MainLayout,
        children : [
          {
            index : true,
            Component : HomePage
          }
        ]
      }
    ]
  }
]);
