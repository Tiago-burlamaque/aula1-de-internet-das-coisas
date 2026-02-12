import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './index.css'

import Login from './pages/Login/Login';
import Register from './pages/Register/Register'
import { AuthProvider } from './context/AuthContext'; // <-- import aqui

import PrivateRoute from './components/PrivateRoute/PrivateRoute';  // <-- import
import Main from './layout/Main/Main';
import Home from './pages/Home/Home';

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/cadastro", element: <Register />},
  
  {
    element: (
      <PrivateRoute>
        <Main/>
      </PrivateRoute>
    ),
    children: [
     { path: "home", element: <Home />}
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)