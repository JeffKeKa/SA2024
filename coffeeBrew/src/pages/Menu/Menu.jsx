import React from "react";
import CardProduto from "../../componetes/card/cardProduto";
import NavBar from "../../componetes/Navbar";
import MenuLateral from "../../componetes/menuLateral/menuLateral";
import "./inicio.css";
function Menu() {
  return (
    <div className="menuTotal">
      <NavBar />
      <MenuLateral />
      <div className="menuDireita">
          <CardProduto />
        </div>
      </div>
  );
}

export default Menu;
