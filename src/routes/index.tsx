import { createBrowserRouter } from 'react-router-dom';

import MasterLayout from '../layout/MasterLayout';
import HomePage from '../pages/HomePage';

export const routes = createBrowserRouter([
  {
    Component: MasterLayout,
    children: [
      {
     
            index : true,
            Component : HomePage
        
      }
    ]
  }
]);
