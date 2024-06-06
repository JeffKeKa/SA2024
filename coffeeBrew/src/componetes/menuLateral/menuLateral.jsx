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
          <Link to="/Menu" className="botoesLaterais">
            Cafes
          </Link>
          <Link to="/Menu" className="botoesLaterais">
            Salgados
          </Link>
          <Link to="/Menu" className="botoesLaterais">
            Sobremesas
          </Link>
          <Link to="/Menu" className="botoesLaterais">
            Bebidas
          </Link>
        </div>
      </div>
    </div>
  );
}
