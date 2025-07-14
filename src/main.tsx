import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.tsx';
import './index.css';
import App from './App.tsx';
import SearchResult from './pages/SearchResult.tsx';
import Details from './pages/Details.tsx';
import AboutUs from './pages/AboutUs.tsx';
import Contactus from './pages/Contactus.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Layout
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/search',
        element: <SearchResult />,
      },
      {
        path: '/rooms/:roomId',
        element: <Details />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/contact',
        element: <Contactus />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
