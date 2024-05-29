import React from "react";
import CardProduto from "../../componetes/card/cardProduto";
import NavBar from "../../componetes/Navbar";
import MenuLateral from "../../componetes/menuLateral/menuLateral";
import "./inicio.css";
function Menu() {
  return (
    <div className="menuTotal">
      <MenuLateral />
      <div className="menuDireita">
        <NavBar />
        <div className="cards">
        <div className="colunas">
          <CardProduto />
          <CardProduto />
          <CardProduto />
          <CardProduto />
        </div>
        <div className="colunas">
          <CardProduto />
          <CardProduto />
          <CardProduto />
          <CardProduto />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
