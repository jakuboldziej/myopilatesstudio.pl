import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.scss'
import NotFound from './pages/NotFound'
import { routerItems } from './lib/variables'
import { businessData } from './lib/businessData'
import ReactGA from 'react-ga4'
import Classes from './pages/Classes'

ReactGA.initialize('G-ZDNRFJ6SPH')

const script = document.createElement('script')
script.type = 'application/ld+json'
script.textContent = JSON.stringify(businessData)
document.head.appendChild(script)

const dynamicRoutes = routerItems.map((item) => ({
  path: item.href,
  element: item.element,
}))

dynamicRoutes.push({ path: "/zajecia/:classId", element: <Classes /> });

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: dynamicRoutes,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)