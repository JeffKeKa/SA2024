import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav ">
        <img src="./imagensIcons/ShoppingCart.svg" alt="" className="cart" />
           
            <Link to="/login" className="adicionarProduto">Login</Link> 
         
    </div>
  );
}
export default NavBar;
