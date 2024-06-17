import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateProduct from './components/CreateProduct.jsx'
import ImageList from './components/ImageList.jsx'
import LoginForm from './components/LoginForm.jsx'
import NavComponent from './components/NavComponent.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavComponent />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/product',
        element: <CreateProduct />,
      },
      {
        path: '/images',
        element: <ImageList />,
      },
      {
        path: '/login',
        element: <LoginForm />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
