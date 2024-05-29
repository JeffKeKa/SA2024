import "./menuLateral.css";
import { Link } from "react-router-dom";

export default function MenuLateral() {
  return (
    <div className="menuLateral ">
      <div>
        <img
          src="./imagensProduto\imagensLogo\logoSemFundo.png"
          className="logo"
        />

        <div className="menu">
          <Link to="/Menu" className="adicionarProduto">
            Cafes
          </Link>
          <Link to="/Menu" className="adicionarProduto">
            Salgados
          </Link>
          <Link to="/Menu" className="adicionarProduto">
            Sobremesas
          </Link>
          <Link to="/Menu" className="adicionarProduto">
            Bebidas
          </Link>
        </div>
      </div>
    </div>
  );
}
