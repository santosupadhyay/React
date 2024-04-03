import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Element: <Layout />,
    children:[
      {
        path:'',
        Element: 'home'
      }
    ]
  },

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
