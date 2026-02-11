import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router'
import Register from './pages/Register/Register.jsx'
import Login from './pages/Login/Login.jsx'

const router = createBrowserRouter([
  {
    path: "/", element: <Login />
  },
  {
    path: "/cadastro", element: <Register />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
