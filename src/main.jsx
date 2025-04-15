import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from "./pages/About.jsx"

import store from './redux/store.js';
import { Provider } from 'react-redux';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/about",
    element: <About></About>
  },
]);

 ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
     <Provider store={store}>
       <RouterProvider router={router} />
     </Provider>
   </React.StrictMode>
 );


