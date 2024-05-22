import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Router, RouterProvider} from 'react-router-dom'
import './index.css'
import router from './routers/routers.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <RouterProvider router={router}>

  </RouterProvider>
)
