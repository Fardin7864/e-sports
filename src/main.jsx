import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRoute from './routes/MainRoute/MainRoute.jsx'
import AuthanticationProvider from './providers/AuthanticationProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthanticationProvider>
    <RouterProvider router={MainRoute}>
    </RouterProvider>
    </AuthanticationProvider>
  </React.StrictMode>,
)
