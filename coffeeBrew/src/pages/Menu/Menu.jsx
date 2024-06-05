import React from "react";
import CardProduto from "../../componetes/Card/CardMenu";
import Navbar from "../../componetes/Navbar/Navbar";
import MenuLateral from "../../componetes/MenuLateral/MenuLateral";
import "./menu.css";

function Menu() {
  return (
    <div className="menuTotal">
      
      <MenuLateral />
      <section>
        <Navbar />
      <div className="menuDireita">
        <CardMenu />
      </div>

      </section>
      </div>
  );
}

export default Menu;
