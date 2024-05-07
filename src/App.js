import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
import Game from './Views/Game';
import Test from './Views/Test';

const router = createHashRouter([
  {
    path: "/*",
    element: <Test/>,
  },
  {
    path: "/game",
    element: <Game/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);