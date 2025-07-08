import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.tsx';
import './index.css';
import App from './App.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Layout
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
