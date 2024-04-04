import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Projects from './components/Projects/Projects.jsx'
import Socialmedia from './components/Socialmedia/Socialmedia.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     Element: <Layout />,
//     children:[
//       {
//         path:'/home',
//         Element: <Home />
//       },
//       {
//         path: '/about',
//         Element: <About />
//       },
//       {
//         path: '/contact',
//         Element: <Contact />
//       },
//       {
//         path: '/projects',
//         Element: <Projects />
//       },
//       {
//         path: '/socialmedia',
//         Element: <Socialmedia />
//       }
//     ]
//   }

// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      {/* <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       /> */}
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
