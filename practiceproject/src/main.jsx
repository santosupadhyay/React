import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom'
import Layout from './Layout.jsx'


const router =  createBrowserRouter(
  createRoutesFromChildren(
    <Route path= '/' element= {<Layout />} >
    {/* <Route path='' element= {<Home/>} /> */}
    {/* <Route path='about' element= {<About/>} />
    <Route path='projects' element= {<Projects/>} />
    <Route path='socialmedia' element= {<Socialmedia/>} />
    <Route path='contact' element={<Contact/>} /> */}
  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <RouterProvider router={router} />
  </React.StrictMode>
)
