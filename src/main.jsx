import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import './index.css'
import { router } from './router/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="max-w-screen-lg mx-auto">
      <HelmetProvider >
        <RouterProvider router={router} />
      </HelmetProvider>
    </div>
  </React.StrictMode>,
)
