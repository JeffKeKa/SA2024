import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import React from 'react'
import Inicio from '../pages/inicio/Inicio'
import Menu from '../pages/Menu/Menu.jsx'
import Login from '../componetes/CompLogin/Login'
import SingUp from '../pages/singUp/index'
import Comanda from '../componetes/Comanda/Comanda'

const routers = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/Inicio',
                element:<Inicio/>
            },
            {
                path:'/Menu',
                element:<Menu/>
            },
            {
                path:'/SingUp',
                element:<SingUp/>
            },
            {
                path:'/comanda',
                element:<Comanda/>
            },
          
            
             
        ]
    }
])

export default routers