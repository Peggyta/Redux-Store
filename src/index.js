import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/styled-engine';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StyledEngineProvider injectFirst>
      <RouterProvider router={router} />
  </StyledEngineProvider>   
);

