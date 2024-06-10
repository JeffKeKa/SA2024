import React from "react";
import CardMenu from "../../componentes/cardMenu/CardMenu";
import Navbar from "../../componetes/Navbar/Navbar";
import MenuLateral from "../../componetes/MenuLateral/menuLateral";
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
        <CardMenu/>
      </div>

      </section>
      </div>
  );
}

export default Menu;
