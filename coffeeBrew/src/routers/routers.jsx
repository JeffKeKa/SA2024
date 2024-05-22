import { createBrowserRouter } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import App from '../App'
import React from 'react'

const routers = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path:'/',
                element:<Inicio/>
            },
        ]
    }
])

export default routers