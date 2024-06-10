import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import React from 'react'
import Inicio from '../pages/inicio/Inicio'
import Menu from '../pages/Menu/Menu.jsx'
import Login from '../componetes/CompLogin/CompLogin.jsx'
import SingUp from '../pages/singUp/index'
import Comanda from '../componetes/Comanda/Comanda'
import CadastroProduto from '../pages/CadastroProduto/CadastroProduto.jsx'

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
            {
                path:'/CadastroProduto',
                element:<CadastroProduto/>
            },
          
            
             
        ]
    }
])

export default routers