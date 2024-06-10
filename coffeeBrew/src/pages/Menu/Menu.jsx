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
        <CardProduto/>
      </div>

      </section>
      </div>
  );
}

export default Menu;
