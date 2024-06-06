import React from "react";
import CardProduto from "../../componetes/Card/CardMenu";
import Navbar from "../../componetes/Navbar/Navbar";
import MenuLateral from "../../componetes/menuLateral/MenuLateral";
import "./menu.css";

function Menu() {
  return (
    <div className="menuTotal">
      <div>
      <MenuLateral />
      </div>
      <section>
        <Navbar />
      <div className="menuDireita">
        <CardProduto />
      </div>

      </section>
      </div>
  );
}

export default Menu;
