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
<<<<<<< HEAD
        <CardProduto/>
=======
        <CardProduto />
>>>>>>> daf3d8e4a209b7119000634d2732d8fb9de8b122
      </div>

      </section>
      </div>
  );
}

export default Menu;
